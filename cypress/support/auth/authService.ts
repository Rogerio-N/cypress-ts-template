import loginPage from '../../pages/login'

class AuthService {
	login(email: string, password: string) {
		loginPage.typeEmail(email)
		loginPage.typePassword(password)
		loginPage.clickButtonSignin()
	}
}

export default new AuthService()
