import Header from '../components/header'

describe('empty spec', () => {
	it('passes', () => {
		cy.visit('/')
		Header.clickLinkCreateAccount()
	})
})
