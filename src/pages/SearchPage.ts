import { $ } from 'protractor';

export class SearchPage {
  public searchTextBox: any;
  public searchButton: any;

  constructor() {
    this.searchTextBox = $('[type="text"]');
    this.searchButton = $('input[value="Google Search"]');
  }
}
