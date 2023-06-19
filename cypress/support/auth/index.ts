import authController from './authController'

Cypress.Commands.add('login', (email: string, password: string) => {
	authController.login(email, password)
})
