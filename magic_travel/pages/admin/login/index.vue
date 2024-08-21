<template>
	<section class="mt-header layout-pt-lg layout-pb-lg">
		<Loading v-if="stateBase.isLoading" />
		<div class="container">
			<div class="row justify-center">
				<div class="col-xl-6 col-lg-7 col-md-9">
					<div class="text-center mb-40 md:mb-30">
						<h1 class="text-30">Log In</h1>
						<div class="text-18 fw-500 mt-10 md:mt-15">We're glad to see you again!</div>
					</div>

					<form
						@submit.prevent="handleLogin"
						class="contactForm border-1 rounded-12 px-60 py-60 md:px-25 md:py-30"
					>
						<div class="form-input">
							<input v-model="state.email" type="email" required />
							<label class="lh-1 text-16 text-light-1">Email Address</label>
						</div>

						<div class="form-input mt-30">
							<input v-model="state.password" type="password" required />
							<label class="lh-1 text-16 text-light-1">Password</label>
						</div>

						<button type="submit" class="button -md -dark-1 bg-accent-1 text-white col-12 mt-30">
							Log In
							<i class="icon-arrow-top-right ml-10"></i>
						</button>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { reactive } from 'vue';
import { setToken, clearToken, UserAdmin } from '@/app/models';
import { useBaseStore } from '@/stores/base';
import Loading from '@/components/common/Loading';
import { isEmpty } from 'opLodash';
import { useRouter } from 'vue-router';

const router = useRouter();

// ------- Declaring Ref ------
const state = reactive({
	email: null,
	password: null,
	rememberMe: null,
});

// ------- Declaring Store ------
const { state: stateBase, setIsLoading, setUsers, resetUsers } = useBaseStore();

// ------- Declaring Function ------

// ------- Api Async ------

const handleLogin = async () => {
	try {
		const data = {
			email: state.email,
			password: state.password,
		};
		const res = await UserAdmin.login(data);
		if (res && !isEmpty(res)) {
			setToken(res);
			setUsers(res.data);
			router.push({
				name: 'db-main',
			});
		}
	} catch (error) {
		resetUsers();
		clearToken();
	}
};
</script>

<style lang="scss" scoped></style>
