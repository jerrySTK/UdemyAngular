import { NewAwesomeAppPage } from './app.po';

describe('new-awesome-app App', () => {
  let page: NewAwesomeAppPage;

  beforeEach(() => {
    page = new NewAwesomeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
