import { GithubFinderPage } from './app.po';

describe('github-finder App', function() {
  let page: GithubFinderPage;

  beforeEach(() => {
    page = new GithubFinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
