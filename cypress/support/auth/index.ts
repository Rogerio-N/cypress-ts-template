import authController from './auth-controller'

Cypress.Commands.add('login', (email: string, password: string) => {
	authController.login(email, password)
})
