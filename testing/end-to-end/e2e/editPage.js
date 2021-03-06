var EditPage = (function() {
  function EditPage() {
    this.open = function() {
      browser.get('http://localhost:8000/#/');
    };
    this.enterAuthor = function(authorParam) {
      var author = element(by.model('ctrl.todo.author'));
      author.clear();
      author.sendKeys(authorParam);
    };
    this.enterTitle = function (titleParam) {
      var title = element(by.model('ctrl.todo.title'));
      title.clear();
      title.sendKeys(titleParam);
    };
    this.clickSave = function () {
      return element(by.css('#btn-save')).click();
    };
  }

  return EditPage;
})();

module.exports = EditPage;
