import React, { useEffect } from 'react';
import { CgTrash } from 'react-icons/cg';
import { REMOVE_TODO, HIDE_MESSAGE } from '../store/TodoSlice';
import { useDispatch } from 'react-redux';

const Todo = ({ task, date, id }) => {
  const dispatch = useDispatch();

  const handleRemoveTodo = id => {
    dispatch(REMOVE_TODO(id));
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(HIDE_MESSAGE());
    }, 3000);

    return () => clearTimeout(timeout);
  });

  return (
    <li className='flex flex-row w-full justify-between border-2 border-slate-300 rounded-md bg-slate-50 shadow-md shadow-slate-300 p-2 my-2'>
      <div>
        <p className='text-default text-slate-800'>{task}</p>
        <p className='text-xs text-slate-400'>{date}</p>
      </div>
      <CgTrash
        className='text-red-400 hover:cursor-pointer hover:scale-105 transition-all'
        onClick={() => handleRemoveTodo(id)}
      />
    </li>
  );
};

export default Todo;
