import { createSlice } from "@reduxjs/toolkit";

const SongSlice = createSlice({
  name: "song",
  initialState: {
    authUser: null,
    otherSongs: null,
    selectedSong: null,
    isPlaying: false,
    otherPlayList: null,
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
      state.isPlaying = true; // Start playing when a new song is selected
    },
    togglePlayPause: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    getPlaylist: (state, action) => {
      state.otherPlayList = action.payload;
    },
  },
});
export const {
  setAuthUser,
  setOtherSong,
  getPlaylist,
  setSelectedSong,
  togglePlayPause,
} = SongSlice.actions;
export default SongSlice.reducer;
