import { configureStore } from '@reduxjs/toolkit';
import TodoReducer from './TodoSlice';

const store = configureStore({
  reducer: {
    TodoReducer,
  },
});

export default store;
