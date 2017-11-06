/**
 * Created by krzysztofk on 2017-06-23.
 */
// var assert = require('assert');
//
// const context = require('aws-lambda-mock-context');
// const handler = require('../handler');
// const mocha = require('mocha');
// const chai = require('chai');
//
// const sayHello = handler.sayHello;
// const sayHelloWithName = handler.sayHelloWithName;
// const expect = chai.expect;
// const should = chai.should;
// const ctx = context();
//
// describe("When invoking sayHello", function () {
//
//     let result = null;
//     let error = null;
//
//     before(function(assertFunction) {
//         sayHelloWithName( {
//             name: 'John'
//         }, ctx);
//
//         ctx.Promise
//             .then(response => {
//                 result = response;
//                 assertFunction();
//             })
//             .catch(err => {
//                 error = err;
//                 assertFunction();
//             });
//     });
//
//     describe('When invoking sayHelloWithName', function() {
//         it('should not have throw any error', function() {
//             expect(error).to.be.null
//         });
//
//         it('should return Hello John for John passed as argument', function () {
//             result.should.be.a('Hello John')
//         })
//     })
// });


const webdriverio = require('webdriverio');
const client = webdriverio.remote( {
    browserName: 'chrome',    // options: `firefox`, `chrome`, `opera`, `safari`
    version: '27.0',          // browser version
    platform: 'XP',           // OS platform
    tags: ['tag1','tag2'],    // specify some tags (e.g. if you use Sauce Labs)
    name: 'my test',           // set name for test (e.g. if you use Sauce Labs)
    pageLoadStrategy: 'eager' // strategy for page load
});