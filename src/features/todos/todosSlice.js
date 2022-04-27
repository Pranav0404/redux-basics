import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  list: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.list = [...state.list, action.payload];
    }
  },
});

export const { addTodos } = todosSlice.actions;

export const selectTodos = (state) => state.todos.list;

export default todosSlice.reducer;
