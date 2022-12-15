import { createSlice } from "@reduxjs/toolkit";
// import { findAllUsersThunk, findUserByIdThunk, loginThunk,
//          logoutThunk, profileThunk, registerThunk } from "./users-thunk";

import { findAllUsersThunk } from "./users-thunk";

const initialState = {
    users: [],
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
    }
})

export default usersReducer.reducer;