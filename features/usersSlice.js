import { createSlice } from "@reduxjs/toolkit";
import { users } from "@/data/users@";
import { videogames } from "@/data/videogames@";

const allUsers = users;
const initialUser = users[0];

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
      console.log(findUser);
      return { ...state, currentUser: findUser };
      // if (findUser) {
      //   state.currentUser = findUser;
      // }
    },
    addToCart: (state, action) => {
      const { id } = action.payload;
      const findGame = videogames.find((gm) => gm.id === id);
      const updatedCartItems = state.currentUser.cartItems.concat(findGame);

      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          cartItems: updatedCartItems,
        },
      };
      // console.log({ updatedUsr });
      // return { ...state, updatedUsr };
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;

      // Filtrar los juegos del carrito y crear un nuevo array sin el juego con el ID especificado
      const updatedCartItems = state.currentUser.cartItems.filter(
        (game) => game.id !== id
      );

      // Retornar un nuevo objeto de estado con cartItems actualizado
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          cartItems: updatedCartItems,
        },
      };
    },
  },
});

export const { login, addToCart, removeFromCart } = usersSlice.actions;

export default usersSlice.reducer;
