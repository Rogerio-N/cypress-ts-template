class HeaderPage {
	private elements = {
		linkCreateAccount: () =>
			cy.get('header').findByText('Create an Account'),
		linkLogin: () => cy.get('header').findByText('Sign In'),
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

export default HeaderPage
