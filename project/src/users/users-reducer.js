import { createSlice } from "@reduxjs/toolkit";
// import { findAllUsersThunk, findUserByIdThunk, loginThunk,
//          logoutThunk, profileThunk, registerThunk } from "./users-thunk";

import {findAllUsersThunk, loginThunk, registerThunk} from "./users-thunk";

const initialState = {
    users: [],
    currentUser: null,
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
        [loginThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
            state.loading = false;
        },
        [registerThunk.fulfilled]: (state, action) => {

            state.currentUser = action.payload
            state.loading = false;
        },

    }
})

export default usersReducer.reducer;