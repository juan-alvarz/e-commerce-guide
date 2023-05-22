import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "@/features/usersSlice@";
import gamesReducer from "@/features/gamesSlice@";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    games: gamesReducer,
  },
});
