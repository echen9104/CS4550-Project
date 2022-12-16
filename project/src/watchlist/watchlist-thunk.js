import {createAsyncThunk} from "@reduxjs/toolkit";
import {userWatchesPosting, findPostingsWatchedByUser} from "./watchlist-service";

export const userWatchesPostingThunk = createAsyncThunk(
    'userWatchesPosting',
    async (watching) => {
        return await userWatchesPosting(watching._id)
    }
)

export const findPostingsWatchedByUserThunk = createAsyncThunk(
    'findPostingsWatchedByUser',
    async (uid) => await findPostingsWatchedByUser(uid)
)