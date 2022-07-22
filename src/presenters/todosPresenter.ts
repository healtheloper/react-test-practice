import { TodoType } from '@components/Todo';

class TodosPresenter {
  todos: TodoType[];

  constructor(todos: TodoType[]) {
    this.todos = todos;
  }

  getTodos() {
    return this.todos;
  }

  delete(todoId, update) {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
    update(this.todos);
  }

  add(title, update) {
    const lastTodo = this.todos.at(-1);
    const newId = lastTodo ? lastTodo.id + 1 : 1;
    const newTodo = {
      id: newId,
      title,
    };
    this.todos = [...this.todos, newTodo];
    update(this.todos);
  }
}

export default TodosPresenter;
