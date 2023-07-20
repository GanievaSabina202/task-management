import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [],
  inProgress: [],
  InReview: [],
  Done: []
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addToTask: (state, action) => {
      state.tasks = [action.payload, ...state.tasks];
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((tasksItem) => tasksItem.id !== action.payload);
    },
    todoDrag: (state, action) => {
      const result = action.payload;
      if (!result.destination) return;
      const { source, destination } = result;
      if (source.droppableId !== destination.droppableId) {
        let sourceColumn = state[source.droppableId];
        let destColumn = state[destination.droppableId];
        const sourceItems = [...sourceColumn];
        const destItems = [...destColumn];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        state[source.droppableId] = sourceItems;
        state[destination.droppableId] = destItems;
        state[destination.droppableId][0].colums = destination.droppableId;
      } else {
        const column = state[source.droppableId];
        const copiedItems = [...column];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        state[source.droppableId] = copiedItems;
      }
    },
  },
})

export const { addToTask, todoDrag, deleteTask } = tasksSlice.actions

export default tasksSlice.reducer