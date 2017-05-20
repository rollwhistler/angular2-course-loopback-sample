'use strict';

var Transform = require('stream').Transform;
var _ = require('lodash');
var Q = require('q');
var fs = require('fs');

module.exports = {

    skipLines: function batcher(options) {

        var opts = options || {};
        _.defaults(opts, {n: 100});

        var batcher = new Transform({objectMode: true});
        batcher.linesRead = [];
        batcher.n = opts.n;

        batcher._transform = function batchTransform(data, encoding, done) {
            this.linesRead += 1;
            if (this.linesRead > this.n) {
                this.push(data);
            }

            done();
        };

        batcher._flush = function batchTransformFlush(done) {
            done();
        };

        return batcher;

    },

    batcher: function batcher(options) {

        var opts = options || {};
        _.defaults(opts, {batchSize: 100});

        var batcher = new Transform({objectMode: true});
        batcher.batch = [];
        batcher.batchSize = opts.batchSize;

        batcher._transform = function batchTransform(data, encoding, done) {

            // Add to batch
            this.batch.push(data);

            // Push batch if full
            if (this.batch.length === this.batchSize) {
                this.push(this.batch);
                this.batch = [];
            }

            done();
        };

        batcher._flush = function batchTransformFlush(done) {
            // flush any remaining models left in the batch
            if (this.batch.length > 0) {
                this.push(this.batch);
            }
            done();
        };

        return batcher;

    },

    filter: function batcher(options) {

        var opts = options || {};
        _.defaults(opts, {
            matcherFn: function () {
                return true;
            }
        });

        var filter = new Transform({objectMode: true});
        filter.matcherFn = opts.matcherFn;

        filter._transform = function filterTransform(data, encoding, done) {

            console.log('Data', data);
            var line = data.toString(encoding);

            if (this.matcherFn(line)) {
                this.push(data);
            }

            done();
        };

        filter._flush = function batchTransformFlush(done) {
            done();
        };

        return filter;

    }

};
