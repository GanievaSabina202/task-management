import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/tasks/tasksSlice';
import usersSlice from '../features/users/usersSlice';

export const store = configureStore({
    reducer: {
        task: taskReducer,
        users: usersSlice
    },
})