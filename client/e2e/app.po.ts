import { browser, element, by } from 'protractor';

export class BasicAngularSamplePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('h1')).getText();
  }
}
