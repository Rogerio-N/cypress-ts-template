import HeaderText from './headerTextEnum'

class Header {
	private elements = {
		linkCreateAccount: () =>
			cy.get('header').contains(HeaderText.CREATE_ACCOUNT),
		linkLogin: () => cy.get('header').contains(HeaderText.SIGN_IN),
	}

	clickLinkCreateAccount() {
		this.elements.linkCreateAccount().click()
	}

	getLinkCreateAccount() {
		return this.elements.linkCreateAccount()
	}

	clickLinkLogin() {
		this.elements.linkLogin().click()
	}
}

export default new Header()
