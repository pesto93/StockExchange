import { StockExchangePage } from './app.po';

describe('stock-exchange App', () => {
  let page: StockExchangePage;

  beforeEach(() => {
    page = new StockExchangePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
