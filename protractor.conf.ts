import { browser, Config } from 'protractor';
import { retry } from 'protractor-retry';
import { FileDetector } from 'selenium-webdriver/remote';
import { appConfig } from './config';

const browserstackUser: string = process.env.user;
const browserstackKey: string = process.env.pwd;

export const config: Config = {
  SELENIUM_PROMISE_MANAGER: false,
  afterLaunch: () => {
    return retry.afterLaunch(appConfig.retryFailedTest);
  },
  baseUrl: appConfig.baseUrl,
  cucumberOpts: {
    'format': [
      './node_modules/cucumber-pretty'
    ],
    'format-options':  '{ "colorsEnabled": true}',
    'require': ['./test/step-definitions/**/*.js'],
    'strict': true
  },
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  getPageTimeout: appConfig.timeouts.long,
  multiCapabilities: [
    {
      'browserName': 'Chrome',
      'browserstack.key': browserstackKey,
      'browserstack.user': browserstackUser
    },
    {
      'browserName': 'Safari',
      'browserstack.key': browserstackKey,
      'browserstack.user': browserstackUser
    },
    {
      'browserName': 'Firefox',
      'browserstack.key': browserstackKey,
      'browserstack.user': browserstackUser
    },
    {
      'browserName': 'IE',
      'browserstack.key': browserstackKey,
      'browserstack.user': browserstackUser
    }
  ],
  onCleanUp: (results) => {
     retry.onCleanUp(results);
  },
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(appConfig.timeouts.implicitlyWait);
    browser.setFileDetector(new FileDetector());
    retry.onPrepare();
  },
  seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',
  specs: [
    '../test/features/**/*.feature'
  ]
};
