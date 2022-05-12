import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
  return (
    <section className='w-full max-w-sm bg-slate-100 border-2 border-slate-200 mx-auto shadow-md shadow-slate-300 rounded-lg p-8 flex flex-col justify-center items-center'>
      <TodoForm />
      <TodoList />
    </section>
  );
};

export default TodoApp;
