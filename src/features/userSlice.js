import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwt_decode from "jwt-decode";

const token = localStorage.getItem("token") || null;

export const fetchUser = createAsyncThunk("/task/by-user", async () => {
  if (token !== null) {
    const decoded = jwt_decode(token);
    const res = await axios.get(`https://mern-task-management.herokuapp.com/user/${decoded.id}`, {
      headers: {
        "x-access-token": "Bearer " + localStorage.getItem("token"),
      },
    });
    return res.data;
  } else {
    return {};
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    isFetching: false,
    user: {},
    error: "",
    active: false,
  },
  reducers: {
    logout: (state, action) => {
      localStorage.removeItem("token");
      state.isFetching = false;
      state.user = {};
      state.error = "";
      state.active = false;
    },
  },
  extraReducers: {
    [fetchUser.pending]: (state, action) => {
      state.isFetching = true;
      state.user = {};
      state.error = "";
      state.active = false;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.isFetching = false;
      state.user = action.payload;
      state.error = "";
      state.active = true;
    },
    [fetchUser.rejected]: (state, action) => {
      state.isFetching = false;
      state.user = {};
      state.error = action.payload;
      state.active = false;
    },
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
