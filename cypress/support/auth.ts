import LoginPage from '../pages/login'

Cypress.Commands.add(
	'login',
	(email: string | undefined, password: string | undefined) => {
		if (!email || !password) {
			throw new Error('Email and password are required')
		}
		const loginPage = new LoginPage()
		loginPage.typeEmail(email)
		loginPage.typePassword(password)
		loginPage.clickButtonSignin()
	}
)
