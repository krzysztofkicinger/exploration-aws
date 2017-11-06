const AWS = require('aws-sdk');

const success = function(callback, response) {
    callback(null, response);
};

module.exports.sayHello = (event, context, callback) => {
    success(callback, 'Says hello from lambda');
};

module.exports.sayHelloWithName = (event, context, callback) => {
    const name = event.name;
    callback(null, "Hello " + name);
};

