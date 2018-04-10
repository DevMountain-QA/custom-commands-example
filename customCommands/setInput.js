/**
 * Clears, sets and verifies value on an input field.
 * @param {string} selector 
 * @param {string} value 
 */
exports.command = function(selector, value){
    let browser = this
    browser.perform(function(){
        browser.clearValue(selector)
            .setValue(selector, value)
            .verify.value(selector, value)
    })
    return browser
}