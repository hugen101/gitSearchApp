import { GitSearchAppPage } from './app.po';

describe('git-search-app App', function() {
  let page: GitSearchAppPage;

  beforeEach(() => {
    page = new GitSearchAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
