var assert = require('assert');

describe('webdriver.io page', function() {
    it('should have the right title -fancy generator way', function() {
        browser.url('http://webdriver.io');
        const title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
    })
});