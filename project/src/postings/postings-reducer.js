import {createSlice} from "@reduxjs/toolkit";
import {
    createPostingThunk,
    findPostingsByUserThunk,
    findPostingsBySkuThunk,
    deletePostingThunk
} from "./postings-thunk";

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
        [findPostingsByUserThunk.fulfilled]: (state, action) => {
            state.postings = action.payload
        },
        [findPostingsBySkuThunk.fulfilled]: (state, action) => {
            state.postings = action.payload
        },
        [deletePostingThunk.fulfilled]: (state, action) => {
            state.postings = state.postings.filter(p => {
                return p._id !== action.payload
            })
        }
    }
})

export default postingsReducer.reducer