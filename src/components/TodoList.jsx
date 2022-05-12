import React from 'react';
import Todo from './Todo';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const taskList = useSelector(state => state.TodoReducer.tasks);
  return (
    <div className='flex flex-col w-full'>
      <ul>
        {taskList.map(task => {
          return <Todo key={task.id} {...task} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
