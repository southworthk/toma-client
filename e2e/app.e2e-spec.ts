import { TomaClientPage } from './app.po';

describe('toma-client App', function() {
  let page: TomaClientPage;

  beforeEach(() => {
    page = new TomaClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
