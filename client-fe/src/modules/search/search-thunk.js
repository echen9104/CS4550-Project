import {createAsyncThunk} from "@reduxjs/toolkit";

export const findShoeBySearchTermThunk = createAsyncThunk(
    'findShoeBySearchTerm', (term) => findShoeBySearchTerm(term)
)