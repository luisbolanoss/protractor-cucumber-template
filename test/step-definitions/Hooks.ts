import { Before } from 'cucumber';
import { browser } from 'protractor';
import { appConfig } from '../../config';

Before({ timeout: 10000 }, async () => {
  await browser.get(appConfig.baseUrl);
});
