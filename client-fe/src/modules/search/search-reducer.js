import {createSlice} from "@reduxjs/toolkit";
import {findShoeBySearchTerm} from "./search-service.js";
import {findShoeBySearchTermThunk} from "./search-thunk.js";

const initialState = {
    shoes: [],
    loading: false,
    details: {}
}

const stockxReducer = createSlice({
    name: 'stockx',
    initialState,
    extraReducers: {
        [findShoeBySearchTermThunk.fulfilled]: (state, action) => {
            state.shoes = action.payload
        },
    }
})

export default stockxReducer.reducer