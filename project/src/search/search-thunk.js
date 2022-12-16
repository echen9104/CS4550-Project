import {createAsyncThunk} from "@reduxjs/toolkit";
import {findShoeBySearchTerm, findShoeBySku} from "./search-service";

export const findShoeBySearchTermThunk = createAsyncThunk(
    'findShoesBySearchTerm', (term) => findShoeBySearchTerm(term)
)

export const findShoeBySkuThunk = createAsyncThunk(
    'findShoeBySku', (skuID) => findShoeBySku(skuID)
)