import { createSlice } from "@reduxjs/toolkit";
import { users } from "@/data/users@";

const allUsers = users;
const initialUser = {
  id: null,
  fullName: "",
  email: "",
  password: "",
  age: null,
  cartItems: [],
};

const initialState = {
  allUsers,
  currentUser: initialUser,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      console.log({ email, password });
      const findUser = state.allUsers.find(
        (usr) => usr.email === email && usr.password === password
      );
      console.log( findUser );
      return { ...state, currentUser: findUser };
      // if (findUser) {
      //   state.currentUser = findUser;
      // }
    },
  },
});

export const { login } = usersSlice.actions;

export default usersSlice.reducer;
