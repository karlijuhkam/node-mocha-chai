 process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');

var server = require('../api/test-app');

 var should = chai.should();

chai.use(chaiHttp);

describe('Algorithms', function () {


    it('should say Hello demo on /hello/demo GET', function (done) {
        chai.request(server)
            .get('/hello/demo')
            .end(function (err, res) {
                res.should.have.status(200);
                res.body.result.should.equal('Hello demo');
                done();
            });


    });

    it('should say Hello test on /hello/test GET', function (done) {
        chai.request(server)
            .get('/hello/test')
            .end(function (err, res) {
                res.should.have.status(200);
                res.body.result.should.equal('Hello test');
                done();
            });


    });

    it('should tell that the image containing a naked man contains nudity', function (done) {
        chai.request(server)
            .post('/nudity')
            .send({
                'url': 'http://www.isitnude.com.s3-website-us-east-1.amazonaws.com/assets/images/sample/young-man-by-the-sea.jpg'
            })
            .end(function (err, res) {
                res.should.have.status(200);
                res.body.result.nude.should.be.true;
                res.should.be.json
                done();
            });


    });

    it('should tell that the image containing a clothed man contains no nudity', function (done) {
        chai.request(server)
            .post('/nudity')
            .send({
                'url': 'https://s3.r29static.com//bin/entry/983/1920x2623,80/2013550/image.jpg'
            })
            .end(function (err, res) {
                res.should.have.status(200);
                res.body.result.nude.should.be.false;
                res.should.be.json
                done();
            });
    });

    it('should detect that the language used is english', function(done){
        chai.request(server)
            .post('/detectlang')
            .send({
                'input': 'This is in english'
            })
            .end(function (err,res){
                res.should.have.status(200);
                res.body.result.should.be.equal("en");
                done();
            });
    });
    it('should count all words in sentence "how much wood could a woodchuck chuck if a woodchuck could chuck wood"',function(done){
        chai.request(server)
        .post('/wordfreq')
        .send({
            'input':'how much wood could a woodchuck chuck if a woodchuck could chuck wood'
        })
        .end(function(err,res){
            res.should.have.status(200);
            res.body.result.a.should.be.equal(2);
            res.body.result.chuck.should.be.equal(2);
            res.body.result.could.should.be.equal(2);
            res.body.result.how.should.be.equal(1);
            res.body.result.if.should.be.equal(1);
            res.body.result.much.should.be.equal(1);
            res.body.result.wood.should.be.equal(2);
            res.body.result.woodchuck.should.be.equal(2);
            done();
        });
    });

});
