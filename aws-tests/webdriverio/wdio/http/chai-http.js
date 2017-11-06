/**
 * Created by krzysztofk on 2017-06-23.
 */
const mocha = require('mocha')
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('Connect to google', function() {
    chai.request('http://www.google.com')
        .get();
});
