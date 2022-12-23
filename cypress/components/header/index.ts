import HeaderText from './header-models/texts'

export default class Header {
	private elements = {
		linkCreateAccount: () => cy.findByText(HeaderText.CREATE_ACCOUNT),
	}

	clickLinkCreateAccount(): void {
		this.elements.linkCreateAccount().click()
	}

	getLinkCreateAccount() {
		return this.elements.linkCreateAccount()
	}
}
