import Header from '../components/header'
import allUsers from '../fixtures/users'

describe('Login test cenarios', () => {
	it('passes', () => {
		cy.visit('/')
		Header.clickLinkLogin()
		const user = allUsers['roni']
		cy.login(user.email, user.password)
	})
})
