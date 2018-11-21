"use strict";
var request = require('request');
var AlgorithmiaCtrl = function () {

    var AlgorithmiaObj = {};

    AlgorithmiaObj.Hello = function (req, res, next) {

        request({
                method: 'POST',
                url: 'http://api.algorithmia.com/v1/algo/demo/Hello/0.1.0',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Simple simVeDtL2nek60XUjzWdle/A1l31'
                },
                body: '"'+req.params.name+'"'
            }, function (error, response) {

                res.send(JSON.parse(response.body));

            }
        );


    };

    AlgorithmiaObj.Nudity = function (req, res, next) {

        request({
                method: 'POST',
                url: 'http://api.algorithmia.com/v1/algo/sfw/NudityDetectioni2v/0.2.12',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Simple simVeDtL2nek60XUjzWdle/A1l31'
                },
                body: '"'+req.body.url+'"'
            }, function (error, response) {

                res.send(JSON.parse(response.body));

            }
        );

    };

    AlgorithmiaObj.DetectLang = function(req,res,next){

        request({
            method: 'POST',
            url: 'https://api.algorithmia.com/v1/algo/nlp/LanguageIdentification/1.0.0',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Simple simVeDtL2nek60XUjzWdle/A1l31'
            },
            body: '"'+req.body.input+'"'
        }, function(error,response){
            res.send(JSON.parse(response.body));
            console.log(req.body);
        });
    };

    AlgorithmiaObj.WordFreq = function(req,res,next){
        request({
            method: 'POST',
            url: 'https://api.algorithmia.com/v1/algo/diego/WordFrequencyCounter/0.2.0',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Simple simVeDtL2nek60XUjzWdle/A1l31'
            },
            body: '"'+req.body.input+'"'
        },function(error,response){
            res.send(JSON.parse(response.body));
        })
    };

    AlgorithmiaObj.FaceDetect = function(req,res,next){
        request({
            method: 'POST',
            url: 'https://api.algorithmia.com/v1/algo/opencv/FaceDetection/0.1.8',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Simple simVeDtL2nek60XUjzWdle/A1l31'
            },
            body:'"'+req.query.url+'"'
        })
    }
    return AlgorithmiaObj;

};

module.exports = AlgorithmiaCtrl;