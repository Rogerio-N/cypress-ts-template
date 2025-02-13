import Header from '../components/header'
import allUsers from '../fixtures/users'

describe('Login test cenarios', () => {
	it('passes', () => {
        const header  = new Header()

		cy.visit('/')
		header.clickLinkLogin()
		const user = allUsers['roni']
		cy.login(user.email, user.password)
	})
})
