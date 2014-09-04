# grunt-browserstack-test
=======================

Grunt task for the browserstack-test plugin

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-browserstack-test --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-browserstack-test');
```

## The "grunt-browserstack-test" task

### Overview
In your project's Gruntfile, add a section named `grunt-browserstack-test` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  "grunt-browserstack-test": {
    browserstack: {
      username: "JoeDoe",
      apiKey: "k3j4h534kljh534k",
      url: "http://localhost:8000/test/spec-runner.html",
      timeout: 30,
      browsers: [
        {
          "browser": "safari",
          "device": null,
          "browser_version": "6.1",
          "os": "OS X",
          "os_version": "Mountain Lion"
        }
      ]
    }
  }
});

// Load plugins
grunt.loadNpmTasks('grunt-browserstack-test');
```

### Options

#### username
Your Browserstack username.

#### apiKey
Your Browserstack API key.

#### url
Url of the page containing your tests.

#### timeout
Browserstack inactivity timeout in seconds (optional). Default value is 30.

#### browsers
An array of browsers to run test in (capabilities in Browserstack lingo). To get a full list of available browsers run:

```sh
curl -u "<username>:<api key>" https://www.browserstack.com/automate/browsers.json
```
## package.json
Since this plugin is not published to the official npm repository it must be loaded straight from git (version/branch after the # is optional):
```js
"devDependencies": {
  "browserstack-test": "git+ssh://git@github.com:virtusize/grunt-browserstack-test.git#develop"
}
```

## TapReporter
The browserstack-test plugin that is used expects test results in Tap format. To send the results in Tap format from Browserstack back to the plugin there is a tap_reporter.js included in the lib folder. It is a modified version of the Jasmine Tap Reporter. It is used like any other reporter in Jasmine (2.0):
```js
jasmine.getEnv().addReporter(new jasmineReporters.TapReporter());
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

**0.1.0** Initial release

## License

grunt-browserbtack-test is licensed under the three clause BSD license. Copyright 2013 Bram Stein, all rights reserved.
