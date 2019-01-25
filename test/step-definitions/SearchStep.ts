import { Then, When } from 'cucumber';
import { browser, protractor } from 'protractor';
import { SearchPage } from '../../src/pages/searchpage';

const search: SearchPage = new SearchPage();

When(/^I type "(.*?)"$/, async (text: string) => {
  await search.searchTextBox.sendKeys(text);
});

Then(/^I click on search button$/, async () => {
  await browser.actions().sendKeys(protractor.Key.ENTER).perform();
});
