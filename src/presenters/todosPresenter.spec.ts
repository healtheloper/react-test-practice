import TodosPresenter from '@presenters/todosPresenter';

describe('TodosPresenter', () => {
  const todos = [
    {
      id: 1,
      title: '첫 투두',
    },
  ];
  let todosPresenter;

  beforeEach(() => {
    todosPresenter = new TodosPresenter(todos);
  });

  it('init with todos', () => {
    expect(todosPresenter.getTodos()).toEqual(todos);
  });
});
