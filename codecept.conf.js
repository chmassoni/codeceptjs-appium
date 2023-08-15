const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */

const server = require('./server/server.js')

exports.config = {
  name: 'qazando-automation',
  tests: './steps/*_test.js',
  output: './output',
  helpers: {
    Appium: {
      platform: process.env.PLATFORM,
      app: process.env.APP,
      desiredCapabilities: {
        appPackage: process.env.PLATFORM == 'Android' ? process.env.PACKAGE : "",
        appActivity: process.env.PLATFORM == 'Android' ? process.env.ACTIVITY : "",
        deviceName: process.env.DEVICE,
        platformVersion: process.env.VERSION,
      }
    }
  },
  include: {
    I: './steps_file.js',
    login_page: "./pages/login_page.js",
    home_page: "./pages/home_page.js",
  },
  bootstrap: async () => {
    await server.start();
  },
  teardown: async () => {
    await server.stop();
  },
  hooks: [],
  // gherkin:{
  //   features: './features/*.feature',
  //   steps: ['./step_definitions/steps.js']
  // },
  mocha: {},
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}