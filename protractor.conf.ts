import { browser, Config } from 'protractor';
import { FileDetector } from 'selenium-webdriver/remote';
import { appConfig } from './config';

export const config: Config = {
  SELENIUM_PROMISE_MANAGER: false,
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
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(appConfig.timeouts.implicitlyWait);
    browser.setFileDetector(new FileDetector());
  },
  specs: [
    '../test/features/**/*.feature'
  ]
};
