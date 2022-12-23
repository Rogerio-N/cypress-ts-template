class LoginPage {
	private elements = {
		inputEmail: () => cy.get('#email'),
		inputPassword: () => cy.get('#pass'),
		buttonSignin: () => cy.get('#send2'),
	}

	typeEmail(email: string) {
		this.elements.inputEmail().type(email)
	}

	typePassword(password: string) {
		this.elements.inputPassword().type(password)
	}

	clickButtonSignin() {
		this.elements.buttonSignin().click()
	}
}

export default new LoginPage()
