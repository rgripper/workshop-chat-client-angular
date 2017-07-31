import { WorkshopChatClientAngularPage } from './app.po';

describe('workshop-chat-client-angular App', () => {
  let page: WorkshopChatClientAngularPage;

  beforeEach(() => {
    page = new WorkshopChatClientAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
