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
            state.shoes = action.payload
        },
        [findShoeBySkuThunk.fulfilled]: (state, action) => {
            state.details = action.payload[0]
        }
    }
})

export default searchReducer.reducer