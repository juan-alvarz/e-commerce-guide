import { createSlice } from "@reduxjs/toolkit";
import { videogames } from "@/data/videogames@";

const allGames = videogames;

const initialState = {
  allGames,
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
});

export default gamesSlice.reducer;
