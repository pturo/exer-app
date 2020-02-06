import { ExerAppPage } from './app.po';

describe('exer-app App', function() {
  let page: ExerAppPage;

  beforeEach(() => {
    page = new ExerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
