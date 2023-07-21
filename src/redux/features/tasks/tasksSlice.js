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
    editTask: (state, action) => {
      const index = state[action.payload.column].findIndex((todo) => todo.id === action.payload.id);
      state[action.payload.column][index].text = action.payload.text;
      state[action.payload.column][index].time = action.payload.time;
    },

    deleteTask: (state, action) => {
      const index = state[action.payload.column].findIndex((tasks) => tasks.id === action.payload.id);
      state[action.payload.column].splice(index, 1);
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

export const { addToTask, todoDrag, deleteTask, editTask } = tasksSlice.actions

export default tasksSlice.reducer