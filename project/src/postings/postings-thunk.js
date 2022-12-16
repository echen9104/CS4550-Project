import {createAsyncThunk} from "@reduxjs/toolkit";
import {createPosting, findPostingsByUser, findPostingsBySku, deletePosting} from "./postings-service";

export const createPostingThunk = createAsyncThunk(
    'createPosting', (post) => createPosting(post)
)

export const findPostingsByUserThunk = createAsyncThunk(
    'findPostingsByUserThunk', (uid) => findPostingsByUser(uid)
)

export const findPostingsBySkuThunk = createAsyncThunk(
    'findPostingsBySkuThunk', (sku) => findPostingsBySku(sku)
)

export const deletePostingThunk = createAsyncThunk(
    'deletePosting', (pid) => deletePosting(pid)
)