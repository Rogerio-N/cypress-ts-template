import Header from '../components/header'

describe('Login test cenarios', () => {
	it('passes', () => {
		cy.fixture('users').then((users) => {
			const header = new Header()

			cy.visit('/')
			header.clickLinkLogin()

			const user = users.find((user) => user.name === 'random name')
			cy.login(user?.email, user?.password)
		})
	})
})
