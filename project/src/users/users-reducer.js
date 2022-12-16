import { createSlice } from "@reduxjs/toolkit";
// import { findAllUsersThunk, findUserByIdThunk, loginThunk,
//          logoutThunk, profileThunk, registerThunk } from "./users-thunk";

import {findAllUsersThunk, findUserByIdThunk, loginThunk, logoutThunk, registerThunk} from "./users-thunk";

const initialState = {
    users: [],
    currentUser: null,
    publicProfile: null,
    loading: false,
}

const usersReducer = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [findAllUsersThunk.fulfilled]: (state, action) => {
            state.users = action.payload;
            state.loading = false;
        },
        [findUserByIdThunk.fulfilled]: (state, action) => {
            state.publicProfile = action.payload;
        },
        [loginThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
            state.loading = false;
        },
        [logoutThunk.fulfilled]: (state, action) => {
            state.currentUser = null
        },
        [registerThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
            state.loading = false;
        },

    }
})

export default usersReducer.reducer;