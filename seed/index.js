'use strict';

var Q = require('q');
var log = require('winston');

module.exports = function(app) {

    var steps;


    steps = [
        './user-management',
        './admins',
        './users'
    ];

    return steps.reduce(function(memo, step) {
            log.info('Scheduling step', step);
            return memo.then(function() { return require(step)(app) });
        }, Q(0))
        .then(function() {
            log.info('Completed all steps');
        });

};