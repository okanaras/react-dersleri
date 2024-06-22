import { useState } from 'react'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'


function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  console.log('todos', todos);

  const removeTodo = (todoId) => {
    const extractedArr = todos.filter((todo) => todo.id !== todoId);
    setTodos([...extractedArr]);
    console.log('extractedArr', extractedArr);
  }

  const updateTodo = (newTodo) => {
    const updateTodos = todos.map(todo => {
      if (todo.id !== newTodo.id) return todo
      return newTodo;
    });

    setTodos([...updateTodos]);
    console.log('updateTodos', updateTodos);
  };


  return (
    <div className='App'>
      <div className='main'>
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo} />
      </div>
    </div>
  )
}

export default App
