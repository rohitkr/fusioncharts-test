import { FusionchartsTestPage } from './app.po';

describe('fusioncharts-test App', function() {
  let page: FusionchartsTestPage;

  beforeEach(() => {
    page = new FusionchartsTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
