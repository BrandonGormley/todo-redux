import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  message: '',
  isMesage: false,
};

const TodoSlice = createSlice({
  name: 'Todo',
  initialState,
  reducers: {
    ADD_TODO: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
      state.isMessage = true;
      state.message = `Added!`;
    },
    REMOVE_TODO: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      state.isMessage = true;
      state.message = `Deleted!`;
    },
    HIDE_MESSAGE: state => {
      state.isMessage = false;
    },
    SHOW_FORM_ERROR: state => {
      state.isMessage = true;
      state.message = 'Form Error';
    },
  },
});

export const { ADD_TODO, REMOVE_TODO, HIDE_MESSAGE, SHOW_FORM_ERROR } =
  TodoSlice.actions;

export default TodoSlice.reducer;
