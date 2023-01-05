import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  logout,
  refresh,
  addPet,
  deletePet,
  getUserInfo,
  updateUserInfo,
} from './authOperations';

const initialState = {
  user: {
    email: '',
    name: '',
    _id: '',
    city: '',
    phone: '',
    birthday: '',
    avatarUrl: null,
    myPets: [
      {
        _id: '',
        name: '',
        birthday: '',
        breed: '',
        comments: '',
        avatarUrl: null,
        owner: '',
      },
    ],
    favorites: [],
    own: [],
  },
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addFavorite(state, { payload }) {
      state.user.favorites.push(payload);
    },

    deleteFavorite(state, { payload }) {
      state.user.favorites = state.user.favorites.filter(
        item => item !== payload
      );
    },
  },
  extraReducers: {
    // --------------------REGISTER OPERATION--------------------

    [register.pending]: state => {
      state.isLoading = true;
    },
    [register.fulfilled]: state => {
      state.error = null;
      state.isLoading = false;
    },
    [register.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    // --------------------LOG IN OPERATION--------------------

    [login.pending]: state => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, { payload: { user } }) => {
      state.user.email = user.email;
      state.user.name = user.name;
      state.user._id = user._id;
      state.user.city = user.city;
      state.user.phone = user.phone;
      state.user.birthday = user.birthday;
      state.user.avatarUrl = user.avatarUrl;
      state.user.myPets = [...user.myPets];
      state.user.favorites = [...user.favorites, '63b4a4794dd4e4742c08c58b'];
      state.user.own = [...user.own];
      state.accessToken = user.accessToken;
      state.refreshToken = user.refreshToken;

      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [login.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    // --------------------LOG OUT OPERATION--------------------

    [logout.pending]: state => {
      state.isLoading = true;
    },
    [logout.fulfilled]: state => {
      state.user = {
        email: null,
        name: null,
        _id: null,
        city: null,
        phone: null,
        birthday: null,
        avatarUrl: null,
        myPets: [],
        favorites: [],
        own: [],
      };
      state.accessToken = null;
      state.refreshToken = null;

      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logout.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    // --------------------REFRESH OPERATION--------------------

    [refresh.pending]: state => {
      state.isLoading = true;
    },
    [refresh.fulfilled]: (
      state,
      { payload: { refreshToken, accessToken } }
    ) => {
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;

      // state.isLoggedIn = true;
      state.isLoading = false;
    },
    [refresh.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    //-----------------USER-------------------------------

    //get user info
    [getUserInfo.pending]: state => {
      state.error = null;
    },
    [getUserInfo.fulfilled]: (state, action) => {
      state.user.email = action.payload.email;
      state.user.name = action.payload.name;
      state.user._id = action.payload._id;
      state.user.city = action.payload.city;
      state.user.phone = action.payload.phone;
      state.user.birthday = action.payload.birthday;

      state.user.avatarUrl = action.payload.avatarUrl;
      state.user.myPets = [...action.payload.myPets];
      state.user.favorites = [...action.payload.favorites];
      state.user.own = [...action.payload.own];
      // state.user = action.payload;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    [getUserInfo.rejected]: (state, action) => {
      state.error = action.payload;
    },

    //update user info
    [updateUserInfo.pending]: state => {
      state.error = null;
    },
    [updateUserInfo.fulfilled]: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    [updateUserInfo.rejected]: (state, action) => {
      state.error = action.payload;
    },

    //add pet
    [addPet.pending]: state => {
      state.error = null;
    },
    [addPet.fulfilled]: (state, action) => {
      state.user.myPets.push(action.payload);
    },
    [addPet.rejected]: (state, action) => {
      state.error = action.payload;
    },

    //delete pet
    [deletePet.pending]: state => {
      state.error = null;
    },
    [deletePet.fulfilled]: (state, action) => {
      state.user.myPets = state.user.myPets.filter(
        pet => pet._id !== action.payload._id
      );
    },
    [deletePet.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { addFavorite, deleteFavorite } = authSlice.actions;

export default authSlice.reducer;
