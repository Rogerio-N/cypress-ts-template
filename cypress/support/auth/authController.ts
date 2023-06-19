import authService from './authService'

class AuthController {
	login(email: string, password: string) {
		authService.login(email, password)
	}
}

export default new AuthController()
