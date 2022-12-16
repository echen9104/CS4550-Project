import { createSlice } from "@reduxjs/toolkit";
import {
    deleteUserThunk,
    findAllUsersThunk,
    findUserByIdThunk,
    loginThunk,
    logoutThunk,
    registerThunk, updateUserThunk
} from "./users-thunk";

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
        [deleteUserThunk.fulfilled]: (state, action) => {
            state.users = state.users.filter(u => {
                return u._id !== action.payload
            })
        },
        [updateUserThunk.fulfilled]: (state, action) => {
            state.loading = false
            const usersIndex = state.users.findIndex((u) => u._id === action.payload._id)
            state.users[usersIndex] = {
                ...state.users[usersIndex],
                ...action.payload
            }

        }
    }
})

export default usersReducer.reducer;