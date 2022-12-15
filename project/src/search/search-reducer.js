import {createSlice} from "@reduxjs/toolkit";
import {findShoeBySearchTermThunk} from "./search-thunk";

const initialState = {
    shoes: [],
    loading: false
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
    }
})

export default searchReducer.reducer