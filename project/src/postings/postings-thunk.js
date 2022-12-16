import {createAsyncThunk} from "@reduxjs/toolkit";
import {createPosting, findPostingsByUser} from "./postings-service";

export const createPostingThunk = createAsyncThunk(
    'createPosting', (post) => createPosting(post)
)

export const findPostingByUserThunk = createAsyncThunk(
    'findPostingByUserThunk', (uid) => findPostingsByUser(uid)
)