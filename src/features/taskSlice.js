import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "taskList",
  initialState: {
    isFetching: false,
    tasks: [],
    error: "",
  },
  reducers: {
    addTasks: (state, action) => {
      state.tasks = action.payload;
    },
    addNewTask: (state, action) => {
      state.tasks = [action.payload, ...state.tasks];
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task._id !== action.payload);
    },
  },
});

export const { addTasks, addNewTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
