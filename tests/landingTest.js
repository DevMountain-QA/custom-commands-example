module.exports = {
    before : browser => {
        let landingPage = browser.page.landingPage()
        landingPage.navigate()
    },
    after : browser => {
        browser.end()
    },
    'UI Check' : browser => {
        let landingPage = browser.page.landingPage()
        landingPage
            .verify.visible('@header')
            .verify.visible('@navBarLogin')
            .verify.visible('@navBarSignUp')
            .verify.visible('@signUpButtonOne')
            .verify.containsText('@signUpButtonOne', 'Sign Up – It’s Free.')
            .verify.visible('@loginLinkOne')
            .verify.containsText('@loginLinkOne', 'Log in.')
    }
}