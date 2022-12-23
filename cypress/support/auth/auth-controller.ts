import authService from './auth-service'

class AuthController {
	login(email: string, password: string) {
		authService.login(email, password)
	}
}

export default new AuthController()
