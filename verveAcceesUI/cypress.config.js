const { defineConfig } = require('cypress')

// load the environment variables from the local .env file
require('dotenv').config()

module.exports = defineConfig({
  env: {
    'my-var': 'ok',
    //fin_user
    'username2': 'prince.uyosue@interswitchgroup.com',
    //CORPORATE_Admin
    'username1': 'njoku101@qa.team',
    'password1': 'Password13@',
    //fake_user
    'username3': 'VBnjoku101@qa.team',
    'password3': 'Password1@',
    //CORPORATE_USER
    'username4': 'njoku102@qa.team',
    'password4': 'Password13@',
    'vervAdminUser': 'phoenix.shed-okara@interswitchgroup.com',
    'verveAdminPass': 'Mixmax$200',
  },
  fixturesFolder: false,
  experimentalShadowDomSupport: true,
  defaultCommandTimeout: 9000,
  e2e: {
    baseUrl: 'https://verve-access-customer.k8.isw.la/corporate/signin',
    //baseUrl: 'https://verve-access-customer.k8.isw.la/corporate/signin',
    supportFile: false,
    setupNodeEvents (on, config) {
      // we can grab some process environment variables
      // and stick it into config.env before returning the updated config
      config.env = config.env || {}

      // you could extract only specific variables
      // and rename them if necessary
      config.env.FOO = process.env.FOO
      config.env.BAR = process.env.BAR
      config.env.USER_NAME = process.env.USER_NAME
      console.log('extended config.env with process.env.{FOO, BAR, USER_NAME}')

      return config
    },
  
  },

 
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
  reporterEnabled: 'mochawesome',
  mochawesomeReporterOptions:{
    reportDir: 'cypress/reports/mocha',
    mochaFile: 'cypress/reports/results/my-test-output-[hash].xml',
    quite:true,
    overwrite: false,
    html: true,
    json: true
  }
} 



})
      //baseUrl: "https://verve-access-customer.k8.isw.la/corporate/signin"
