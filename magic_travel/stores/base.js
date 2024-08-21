import { reactive, ref } from 'vue';
import { cloneDeep } from 'opLodash';

const initState = {
	users: {},
	isLoading: false,
};

export const useBaseStore = defineStore('base', () => {
	const state = reactive(cloneDeep(initState));

	const setIsLoading = (value) => {
		state.isLoading = value;
	};

	const setUsers = (payload) => {
		state.users = { ...payload };
	};
	const resetUsers = () => {
		state.users = initState.users;
	};

	return {
		state,
		setIsLoading,
		resetUsers,
		setUsers,
	};
});
