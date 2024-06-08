import { configureStore } from "@reduxjs/toolkit";
import songReducer from "./SongSlice";
import userReducer from "./SongSlice";

const store = configureStore({
  reducer: {
    song: songReducer,
    user: userReducer,
  },
});

export default store;
