import { createSlice } from "@reduxjs/toolkit";

const taskViewSlice = createSlice({
  name: "taskView",
  initialState: {
    taskData: {},
    showTaskViewModal: false,
  },
  reducers: {
    setTaskData: (state, action) => {
      state.taskData = action.payload.task;
      state.showTaskViewModal = true;
    },
    resetTaskViewData: (state, action) => {
      state.taskData = {};
      state.showTaskViewModal = false;
    },
  },
});

export const { setTaskData, resetTaskViewData } = taskViewSlice.actions;

export default taskViewSlice.reducer;
