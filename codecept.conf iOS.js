const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  name: 'qazando-automation',
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      platform: 'iOS',
      app: '/Users/stefanini/Documents/projetos/Estudos/UdemyCodeceptjsAppium/appsqazando/qazandoapp.app',
      desiredCapabilities: {
        deviceName: "iPhone 11 Pro Max",
        platformVersion: "15.2",
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
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