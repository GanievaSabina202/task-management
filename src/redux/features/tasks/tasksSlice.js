import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasks: [],
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addToTask: (state, action) => {
            state.tasks = [action.payload, ...state.tasks];
        },
    },
})

export const { addToTask } = tasksSlice.actions

export default tasksSlice.reducer