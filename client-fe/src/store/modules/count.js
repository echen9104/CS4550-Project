import { createSlice } from '@reduxjs/toolkit'

const countSlice = createSlice({
    name: 'count',
    initialState: {
        num: 0
    },
    reducers: {
        setNum(state, { payload }) {
            state.num += payload
        }
    }
})

export const { setNum } = countSlice.actions
export default countSlice.reducer