import {createSlice} from "@reduxjs/toolkit";
import {createPostingThunk, findPostingByUserThunk} from "./postings-thunk";

const initialState = {
    postings: []
}
const postingsReducer = createSlice({
    name: 'postings',
    initialState,
    reducers: {},
    extraReducers: {
        [createPostingThunk.fulfilled]: (state, action) => {
            state.postings.push(action.payload)
        },
        [findPostingByUserThunk.fulfilled]: (state, action) => {
            state.postings = action.payload
        }
    }
})

export default postingsReducer.reducer