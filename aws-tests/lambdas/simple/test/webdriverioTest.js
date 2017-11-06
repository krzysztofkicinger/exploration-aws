const webdriverio = require('webdriverio'),
    should = require('should');

// a test script block or suite
describe('Title Test for Web Driver IO - Tutorial Test Page Website', function() {

    // set timeout to 10 seconds
    this.timeout(10000);
    var driver = {};

    // hook to run before tests
    before( function() {
        // check for global browser (grunt + grunt-webdriver)
        if(typeof browser === "undefined") {
            // load the driver for browser
            driver = webdriverio.remote({ desiredCapabilities: {browserName: 'chrome'} });
            return driver.init();
        } else {
            // grunt will load the browser driver
            driver = browser;
            return;
        }
    });

    it('should be load correct page and title', function () {
        return driver
            .url('http://www.tlkeith.com/WebDriverIOTutorialTest.html')
            .getTitle().then( function (title) {
                (title).should.be.equal("Web Driver IO - Tutorial Test Page");
            });
    });

    // a "hook" to run after all tests in this block
    after(function() {
        if(typeof browser === "undefined") {
            return driver.end();
        } else {
            return;
        }
    });
});