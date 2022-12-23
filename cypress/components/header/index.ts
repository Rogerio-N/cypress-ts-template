import HeaderText from './header-models/texts'

class Header {
	private elements = {
		linkCreateAccount: () =>
			cy.get('header').contains(HeaderText.CREATE_ACCOUNT),
	}

	clickLinkCreateAccount() {
		this.elements.linkCreateAccount().click()
	}

	getLinkCreateAccount() {
		return this.elements.linkCreateAccount()
	}
}

export default new Header()
