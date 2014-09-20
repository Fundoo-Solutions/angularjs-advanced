var TodoListPage = require('./todoListPage');

describe('Todo List Page', function() {
  it('should list todos', function() {
    var todoListPage = new TodoListPage();
    todoListPage.open();
    expect(todoListPage.getTodoListRows().count()).toEqual(2);
    expect(todoListPage.getTitleforRow(1).getText()).toEqual('Meeting for IT Infrastructure');
    expect(todoListPage.getAuthorforRow(1).getText()).toEqual('Shyam');
  });
});
