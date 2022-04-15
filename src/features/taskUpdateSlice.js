import { createSlice } from "@reduxjs/toolkit";

const taskUpdateSlice = createSlice({
  name: "taskUpdate",
  initialState: {
    taskData: {},
    showTaskUpdateModal: false,
  },
  reducers: {
    setTaskUpdateData: (state, action) => {
      state.taskData = action.payload;
      state.showTaskUpdateModal = true;
    },
    resetTaskUpdateData: (state, action) => {
      state.taskData = {};
      state.showTaskUpdateModal = false;
    },
  },
});

export const { setTaskUpdateData, resetTaskUpdateData } =
  taskUpdateSlice.actions;

export default taskUpdateSlice.reducer;
