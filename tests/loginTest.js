module.exports = {
    before: browser => {
        let landingPage = browser.page.landingPage()
        landingPage.navigate()
            .click('@navBarLogin')
        let loginPage = browser.page.loginPage()
        loginPage
            .waitForElementVisible('@loginButton', 10000)
    },
    after: browser => {
        browser.end()
    },
    'UI Check': browser => {
        let loginPage = browser.page.loginPage()
        loginPage
            .verify.containsText('@header', 'Log in to Trello')
            .verify.visible('@header')
            .verify.containsText('@createAccountLink', 'create an account')
            .verify.visible('@createAccountLink')
            .verify.containsText('@emailLabel', 'Email (or username)')
            .verify.visible('@emailLabel')
            .verify.attributeContains('@emailField', 'placeholder', 'e.g., ')
            .verify.visible('@emailField')
            .verify.containsText('@passwordLabel', 'Password')
            .verify.visible('@passwordLabel')
            .verify.attributeContains('@passwordField', 'placeholder', 'e.g., ••••••••••••')
            .verify.visible('@passwordField')
    },
    'Username error': browser => {
        let loginPage = browser.page.loginPage()
        loginPage
            .login('wiggin@battle.edu', 'dummypassword')
            .waitForElementVisible('@errorMessage', 2000)
            .verify.containsText('@errorMessage', 'There isn\'t an account for this email')
    },
    'Password error': browser => {
        let loginPage = browser.page.loginPage()
        loginPage
            .login('ender@battle.edu', 'dummypassword')
            .waitForElementVisible('@errorMessage', 2000)
            .getText('@errorMessage', results => {
                if (results.value === 'Invalid password' || results.value.indexOf('Too many incorrect password attempts.') !== -1)
                    loginPage.verify.ok(true, 'Password error message present.')
                else
                    loginPage.verify.ok(false, 'Password error message present.')
            })
    },
    'Login': browser => {
        let loginPage = browser.page.loginPage()
        loginPage
            .login('aj@devmountain.com', 'testP@55')
            .waitForElementNotPresent('@loginButton', 10000)
    }
}