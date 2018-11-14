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
                    'Authorization': 'Simple simR5LVbr4u6iRdPQ8GgjTAIIL21'
                },
                body: '"demo"'
            }, function (error, response) {

                res.send(JSON.parse(response.body));

            }
        );


    }

    return AlgorithmiaObj;

};

module.exports = AlgorithmiaCtrl;