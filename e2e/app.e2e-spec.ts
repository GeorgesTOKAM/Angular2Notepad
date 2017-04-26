import { Angular2NotepadPage } from './app.po';

describe('angular2-notepad App', function() {
  let page: Angular2NotepadPage;

  beforeEach(() => {
    page = new Angular2NotepadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
