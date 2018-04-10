module.exports = {
    url: 'http://www.trello.com',
    commands: [],
    elements: {
        header: {
            selector: 'div[data-track-group="Global Header"]'
        },
        navBarLogin: {
            selector: '//a[.="Log In"]',
            locateStrategy: 'xpath'
        },
        navBarSignUp: {
            selector: '//a[.="Sign Up"]',
            locateStrategy: 'xpath'
        },
        signUpButtonOne: {
            selector: '(//a[@data-track="Sign Up"])[1]',
            locateStrategy: 'xpath'
        },
        loginLinkOne: {
            selector: '(//a[@data-track="Login"])[1]',
            locateStrategy: 'xpath'
        }
    }
}