import Base from './Base';

class UserAdmin extends Base {
	// Loading
    login = (data) => this.withLoading(() => this.apiPost('/login', data));
	changePassword = (data) => this.withLoading(() => this.apiPost('/change-password', data));
	registerUser = (data) => this.withLoading(() => this.apiPost('/register-user', data));

	// Not Loading
	changePasswordNotLoading = (data) => this.apiPost('/change-password', data);
	registerUserNotLoading = (data) => this.apiPost('/register-user', data);
}
export default new UserAdmin('/admin');
