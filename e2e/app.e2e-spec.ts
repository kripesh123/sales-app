import { SalesAppPage } from './app.po';

describe('sales-app App', () => {
  let page: SalesAppPage;

  beforeEach(() => {
    page = new SalesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
