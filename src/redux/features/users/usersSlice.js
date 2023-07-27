import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    users: [],
    isLoading: false,
    error: null,
}

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const res = await axios('https://jsonplaceholder.typicode.com/users')
        const data = await res.data
        return data
    }
)

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.users = action.payload
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    },
})

export default usersSlice.reducer