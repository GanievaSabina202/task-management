import React, { useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import styles from './todo.module.css';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/features/tasks/tasksSlice';


const Todo = () => {
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.task.tasks);


  const Delete = (id) => {
    dispatch(deleteTask(id))
  }



  return (
    <>
      <Droppable droppableId="tasks">
        {(provided, snapshot) => (
          <div style={{ backgroundColor: snapshot.isDraggingOver ? 'grey' : 'lightgray', padding: "20px", width: "250px", borderRadius: '5px' }} >
            <h5>Todo</h5>
            <div className="characters" {...provided.droppableProps} ref={provided.innerRef}>
              {tasks.map(({ id, text, time }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <div
                        className={styles.todoItemWrap}
                        ref={provided.innerRef}
                        {...provided.draggableProps} {...provided.dragHandleProps}
                      >
                        <p> {text} </p>
                        <div style={{ display: "flex", alignItems: 'center', justifyContent: "space-between" }}>
                          <span> {time} </span>
                          <IconButton aria-label="delete" size="small" onClick={() => { Delete(id) }}>
                            <DeleteIcon />
                          </IconButton>
                          <IconButton aria-label="edit" size="small">
                            <EditIcon />
                          </IconButton>
                        </div>

                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </>
  );
}

export default Todo;
