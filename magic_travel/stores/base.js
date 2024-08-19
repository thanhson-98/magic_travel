import { reactive, ref } from 'vue';
import { cloneDeep } from 'opLodash';

const initState = {
	users: {},
};

export const useBaseStore = defineStore('base', () => {
	const isLoading = ref(false);
	const state = reactive(cloneDeep(initState));

	const setIsLoading = (value) => {
		isLoading.value = value;
	};

	const setUsers = (payload) => {
		state.users = { ...payload };
	};
	const resetUsers = () => {
		state.users = initState.users;
	};

	return {
		isLoading,
		state,
		setIsLoading,
		resetUsers,
		setUsers,
	};
});
