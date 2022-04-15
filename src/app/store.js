import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/taskSlice";
import userReducer from "../features/userSlice";
import taskViewReducer from "../features/taskViewSlice";
import taskUpdateReducer from "../features/taskUpdateSlice";
const store = configureStore({
  reducer: {
    tasksList: tasksReducer,
    user: userReducer,
    taskView: taskViewReducer,
    taskUpdate: taskUpdateReducer,
  },
});

export { store };
