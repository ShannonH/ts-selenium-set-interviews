import { browser, Config } from 'protractor'
require('dotenv').config();

export const config: Config = {
  baseUrl: process.env.baseUrl,
  chromeDriver: require('chromedriver').path,
  directConnect: true,
  specs: ['../tests/**.ts'],
  capabilities: {
    browserName: 'chrome',
    name: 'Unnamed Job',
    logName: 'Chrome_81',
    count: 1,
    shardTestFiles: false,
    maxInstances: 1
  },
  params: {
    adminUsername: process.env.learnAdminUsername,
    adminPassword: process.env.learnAdminPassword
  },
  getPageTimeout: 30000,
  // restartBrowserBetweenTests: true,
  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 60000,
    print: () => {},
    //grep: 'string',
    //invertGrep: boolean,
    //random: boolean,
    //seed: string,
  },
  disableChecks: true,
  configDir: '',
  //debug: false,
  //troubleshoot: true,
  onPrepare() {
    /* Compile TS files */
    require('ts-node').register({
      project: 'tsconfig.json',
      transpileOnly: true
    });
    browser.waitForAngularEnabled(false);
    const JasmineConsoleReporter = require('jasmine-console-reporter');
    const reporter = new JasmineConsoleReporter({
      colors: 1,           // (0|false)|(1|true)|(2|ansi)
      cleanStack: 1,       // (0|false)|(1|true)|2|3
      verbosity: 4,        // (0|false)|1|2|(3|true)|4|Object
      listStyle: 'flat', // "flat"|"indent"
      emoji: true,
      beep: true
    });
    jasmine.getEnv().addReporter(reporter);
  },
  };
