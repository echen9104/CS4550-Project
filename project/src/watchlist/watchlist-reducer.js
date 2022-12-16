import {createSlice} from "@reduxjs/toolkit";
import {userWatchesPostingThunk, findPostingsWatchedByUserThunk} from "./watchlist-thunk";

const initialState = {
    watchings: [],
    loading: false
}

const watchingsReducer = createSlice({
    name: 'watchings',
    initialState,
    extraReducers: {
        [userWatchesPostingThunk.fulfilled]: (state, action) => {
            state.watchings.push(action.payload)
        },
        [findPostingsWatchedByUserThunk.fulfilled]: (state, {payload}) => {
            state.watchings = payload
        },
        [findPostingsWatchedByUserThunk.rejected]: (state, {payload}) => {
            state.watchings = []
        }
    }
})

export default watchingsReducer.reducer