import { PostfaceRedeSocialPage } from './app.po';

describe('postface-rede-social App', function() {
  let page: PostfaceRedeSocialPage;

  beforeEach(() => {
    page = new PostfaceRedeSocialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
