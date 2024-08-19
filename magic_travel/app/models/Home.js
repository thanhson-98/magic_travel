import Base from './Base';

class Home extends Base {
	// Loading
	getListCompany = (query) => this.withLoading(() => this.apiGetWithoutPrefix('/getExample', query));

	addCompany = (data) => this.withLoading(() => this.apiPostWithoutPrefix('/addExample', data));

	updateCompany = (data) => this.withLoading(() => this.apiPutWithoutPrefix('/updateExample', data));

	detailCompany = (id) => this.withLoading(() => this.apiGetWithoutPrefix('/getDetailExample', { id }));

	deleteCompany = (id) => this.withLoading(() => this.apiDeleteWithoutPrefix('/deleteExample', { id }));

	// Not Loading
	getListCompanyNotLoading = (query) => this.apiGetWithoutPrefix('/getExample', query);
}
export default new Home('/home');
