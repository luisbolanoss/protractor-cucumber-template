import { browser, Config } from 'protractor';
import { retry } from 'protractor-retry';
import { FileDetector } from 'selenium-webdriver/remote';
import { appConfig } from './config';

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
      browserName: 'chrome'
    },
    {
      browserName: 'firefox'
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
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    '../test/features/**/*.feature'
  ]
};
