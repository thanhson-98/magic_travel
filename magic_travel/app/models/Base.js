import { useBaseStore } from '@/stores/base.js';
import Cookie from 'js-cookie';
import { isObject } from 'opLodash';
import superagent from 'superagent';

// env variables
export const API_ROOT = 'http://magic-travel-staging.site';
// export const API_ROOT = process.env.REACT_APP_SERVER_API;

let accessInfo;
let refreshToken;

export const parseAccess = () => {
	try {
		accessInfo = JSON.parse(Cookie.get('access'));
		refreshToken = Cookie.get('refresh_token');
	} catch (error) {
		accessInfo = null;
	}
};
parseAccess();

export const getAccessToken = () => {
	parseAccess();
	return accessInfo?.access_token || '';
};

export const getAccessInfo = () => {
	parseAccess();
	return accessInfo ?? '';
};

// Hàm để tính toán thời gian sống còn lại của token
const calculateExpiresInDays = (expiresAt) => {
	const now = new Date();
	const expiresDate = new Date(expiresAt);
	const timeDiff = expiresDate - now;
	const expiresInDays = timeDiff / (1000 * 60 * 60 * 24);
	return expiresInDays;
};

export const setToken = (access) => {
	if (access) {
		Cookie.set('access', JSON.stringify(access), {
			expires: calculateExpiresInDays(access.expires_in),
			sameSite: 'Lax',
		});
		Cookie.set('refresh_token', access.refresh_token || refreshToken, {
			expires: 30,
			sameSite: 'Lax',
		});
		accessInfo = access;
		refreshToken = access.refresh_token || refreshToken;
	} else {
		Cookie.remove('access');
		Cookie.remove('refresh_token');
		Cookie.remove('userId');

		// Reset the default values of accessInfo and refreshToken
		accessInfo = null;
		refreshToken = null;

		localStorage.removeItem('user');
	}
};

export const clearToken = () => setToken(null);

const responseBody = (res) => (res.body ? res.body : res.text);

const tokenPlugin = (req) => {
	parseAccess();
	if (accessInfo) {
		req.set('Authorization', `Bearer ${accessInfo.access_token}`);
	}
};

export const catchError = (e) => {
	let error = e.response;
	if (!isObject(error)) {
		error = e.response?.body || e?.response || {};
	}
	error.status = e.status;
	throw error;
};

export const getNewToken = async (err) => {
	try {
		if (!err || err.status !== 401) {
			return false;
		}
		parseAccess();
		if (!refreshToken) {
			throw new Error('no-token');
		}
		const res = await superagent
			.post(`${API_ROOT}/api/refresh`, {
				refresh_token: refreshToken,
			})
			.then(responseBody);

		setToken({
			...res,
		});
		return true;
	} catch (error) {
		clearToken();
		return false;
	}
};

const requests = {
	del: (url, body) =>
		superagent.del(url, body).retry(1, getNewToken).use(tokenPlugin).then(responseBody).catch(catchError),
	get: (url, body) =>
		superagent.get(url, body).retry(1, getNewToken).use(tokenPlugin).then(responseBody).catch(catchError),
	post: (url, body) =>
		superagent.post(url, body).retry(1, getNewToken).use(tokenPlugin).then(responseBody).catch(catchError),
	put: (url, body) =>
		superagent.put(url, body).retry(1, getNewToken).use(tokenPlugin).then(responseBody).catch(catchError),
};

class Base {
	constructor(apiPrefix) {
		this.apiPrefix = `${API_ROOT}/api${apiPrefix}`;
		this.apiRoot = `${API_ROOT}/api`;
	}

	apiGetWithoutPrefix = (url, query = {}) => requests.get(`${this.apiRoot}${url}`, this.normalizeQuery(query));

	apiPutWithoutPrefix = (url, body) => requests.put(`${this.apiRoot}${url}`, body);

	apiPostWithoutPrefix = (url, body) => requests.post(`${this.apiRoot}${url}`, body);

	apiDeleteWithoutPrefix = (url, body) => requests.del(`${this.apiRoot}${url}`, body);

	apiGet = (url, query = {}) => requests.get(`${this.apiPrefix}${url}`, this.normalizeQuery(query));
	apiPost = (url, body) => requests.post(`${this.apiPrefix}${url}`, body);
	apiPut = (url, body) => requests.put(`${this.apiPrefix}${url}`, body);
	apiDelete = (url, body) => requests.del(`${this.apiPrefix}${url}`, body);

	normalizeQuery = (query) =>
		Object.entries(query).reduce((acc, [key, value]) => {
			if (value !== null) {
				if (typeof value === 'string') {
					acc[key] = value.trim();
				} else if (!Number.isNaN(value)) {
					acc[key] = value;
				}
			}
			return acc;
		}, {});

	async withLoading(apiCall) {
		const { setIsLoading } = useBaseStore();
		try {
			setIsLoading(true);
			return await apiCall();
		} finally {
			setIsLoading(false);
		}
	}
}

export default Base;
