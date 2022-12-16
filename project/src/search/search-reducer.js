import {createSlice} from "@reduxjs/toolkit";
import {findShoeBySearchTermThunk, findShoeBySkuThunk} from "./search-thunk";

const initialState = {
    shoes: [],
    loading: false,
    details: {}
}

const searchReducer = createSlice({
    name: 'search',
    initialState,
    reducers: {},
    extraReducers: {
        [findShoeBySearchTermThunk.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.shoes = action.payload
        },
        [findShoeBySkuThunk.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.details = action.payload
        }
    }
})

export default searchReducer.reducer