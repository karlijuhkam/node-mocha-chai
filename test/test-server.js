process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require("mongoose");

var server = require('../api/app');


var should = chai.should();

chai.use(chaiHttp);

describe('Algorithms', function () {


    it('should say Hello and your input on /hello GET', function (done) {
        chai.request(server)
            .get('/hello/demo')
            .end(function (err, res) {
                res.should.have.status(200);
                res.body.result.should.equal('Hello demo');
                done();
            });


    });
});
