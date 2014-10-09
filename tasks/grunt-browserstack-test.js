/*
 * grunt-browserstack-test
 * https://github.com/virtusize/grunt-browserstack-test
 *
 * Copyright (c) 2014 Virtusize
 * Licensed under the BSD-3 license.
 */

'use strict';

module.exports = function (grunt) {

    var BrowserStackTest = require('browserstack-test');

    grunt.registerMultiTask('grunt-browserstack-test', 'Grunt plugin for running browserstack tests', function () {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
                punctuation: '.',
                separator: ', '
            }),
            browsers,
            done = this.async();

        if (!this.data.username) {
            grunt.log.error('No username defined');
            grunt.exit(3);
        }
        if (!this.data.apikey) {
            grunt.log.error('No apikey defined');
            grunt.exit(3);
        }
        if (!this.data.url) {
            grunt.log.error('No url defined');
            grunt.exit(3);
        }
        if (!this.data.browsers || this.data.browsers.length < 1) {
            grunt.log.error('No browsers defined');
            grunt.exit(3);
        } else {
            browsers = this.data.browsers;
        }
        if (!this.data.timeout) {
            this.data.timeout = 30;
        }

        var client = new BrowserStackTest(this.data.username, this.data.apikey, this.data.apikey);

        client.createTest(this.data.url, { timeout: this.data.timeout }, function (err, test) {
            if (err) {
                grunt.log.error(err);
                done();
            } else {
                browsers.forEach(function (browser) {
                    test.addBrowser(browser);
                });
                test.run();

                test.job.on("complete", function () {
                    done();
                });            }
        });


    });

};
