import LoginPage from '../pages/login'

Cypress.Commands.add('login', (email: string, password: string) => {
    const loginPage = new LoginPage()
    loginPage.typeEmail(email)
    loginPage.typePassword(password)
    loginPage.clickButtonSignin()
})
