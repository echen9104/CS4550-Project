import {createAsyncThunk} from "@reduxjs/toolkit";
import {findShoeBySearchTerm} from "./search-service";

export const findShoeBySearchTermThunk = createAsyncThunk(
    'findShoesBySearchTerm', (term) => findShoeBySearchTerm(term)
)