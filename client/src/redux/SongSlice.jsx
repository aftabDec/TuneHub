import { createSlice } from "@reduxjs/toolkit";

const SongSlice = createSlice({
  name: "song",
  initialState: {
    authUser: null,
    otherSongs: null,
    selectedSong: null,
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
    setOtherSong: (state, action) => {
      state.otherSongs = action.payload;
    },
    setSelectedSong: (state, action) => {
      state.selectedSong = action.payload;
    },
  },
});
export const { setAuthUser, setOtherSong, setSelectedSong } = SongSlice.actions;
export default SongSlice.reducer;
