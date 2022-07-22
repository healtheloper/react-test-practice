import { useRef } from 'react';

const TodoAddForm = ({ onTodoAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (!inputRef.current) return;
    const title = inputRef.current.value;
    onTodoAdd(title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" />
      <button type="submit">생성</button>
    </form>
  );
};

export default TodoAddForm;