import { Then } from 'cucumber';
import { SearchPage } from '../../src/pages/searchpage';

const search: SearchPage = new SearchPage();

Then(/^I clear the search text$/, async () => {
  await search.searchTextBox.clear();
});
