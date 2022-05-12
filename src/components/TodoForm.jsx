import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TODO, HIDE_MESSAGE, SHOW_FORM_ERROR } from '../store/TodoSlice';

const TodoForm = () => {
  const [taskInput, setTaskInput] = useState('');
  const [dateInput, setDateInput] = useState('');

  const { isMessage, message } = useSelector(state => state.TodoReducer);
  const dispatch = useDispatch();

  const handleTaskInput = e => {
    setTaskInput(e.target.value);
  };

  const handleDateInput = e => {
    setDateInput(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    if (!taskInput || !dateInput) {
      dispatch(SHOW_FORM_ERROR());
    }

    if (taskInput && dateInput) {
      const newTask = {
        task: taskInput,
        date: dateInput,
        id: Math.random() * 10000,
      };

      dispatch(ADD_TODO(newTask));
      setTaskInput('');
      setDateInput('');
      return;
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(HIDE_MESSAGE());
    }, 3000);

    return () => clearTimeout(timeout);
  });

  return (
    <form onSubmit={handleFormSubmit}>
      {isMessage && (
        <p
          className={
            message === 'Added!'
              ? 'text-center bg-green-300 rounded-lg text-white mb-2'
              : 'text-center bg-red-300 rounded-lg text-white mb-2'
          }
        >
          {message}
        </p>
      )}
      <div className='flex flex-col'>
        <label className='text-xs mb-1 text-slate-800' htmlFor='task'>
          Task:
        </label>
        <input
          className='border-2 border-slate-200 rounded-lg mb-2 outline-none pl-2 text-slate-600'
          onChange={handleTaskInput}
          type='text'
          id='task'
          name='task'
          value={taskInput}
        />
      </div>
      <div className='flex flex-col'>
        <label className='text-xs mb-1 text-slate-800' htmlFor='date'>
          Date:
        </label>
        <input
          className='border-2 border-slate-200 rounded-lg mb-2 outline-none pl-2 text-slate-600'
          onChange={handleDateInput}
          type='text'
          id='date'
          name='date'
          value={dateInput}
        />
      </div>
      <button
        className='w-full bg-slate-800 text-white rounded-lg py-1 my-2 hover:bg-slate-700 transition-all'
        type='submit'
      >
        Add New Task
      </button>
    </form>
  );
};

export default TodoForm;
