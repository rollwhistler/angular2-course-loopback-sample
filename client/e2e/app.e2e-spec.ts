import { BasicAngularSamplePage } from './app.po';

describe('basic-angular-sample App', () => {
  let page: BasicAngularSamplePage;

  beforeEach(() => {
    page = new BasicAngularSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
