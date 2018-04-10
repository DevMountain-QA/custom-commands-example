let loginCommands = {
    login: function(email, password){
        var browser = this
        this.api.perform(function(){
            browser
                .setInput('@emailField', email)
                .setInput('@passwordField', password)
                .click('@loginButton')
        })
        return this
    }
}

module.exports = {
    commands: [loginCommands],
    elements: {
        header: {
            selector: 'h1'
        },
        createAccountLink: {
            selector: '#signup'
        },
        emailLabel: {
            selector: 'label[for="user"]'
        },
        emailField: {
            selector: '#user'
        },
        passwordLabel: {
            selector: 'label[for="password"]'
        },
        passwordField: {
            selector: '#password'
        },
        loginButton: {
            selector: '#login'            
        },
        errorMessage: {
            selector: 'p[class="error-message"]'
        }
    }
}