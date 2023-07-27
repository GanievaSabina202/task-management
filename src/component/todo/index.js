import React, { useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import DeleteButton from '../ui/deleteButton/deleteButton';
import styles from './todo.module.css';
import EditButton from '../ui/editButton/EditButton';


const Todo = () => {
  const tasks = useSelector((state) => state.task.tasks);

  return (
    <>
      <Droppable droppableId="tasks">
        {(provided, snapshot) => (
          <div style={{ backgroundColor: snapshot.isDraggingOver ? 'grey' : '#bb86fc', padding: "20px", width: "250px", borderRadius: '5px' }} >
            <h5 style={{ color: "#fff", fontSize: "18px", color: 'rgb(255, 255, 255)', margin: 0 }}>Todo</h5>
            <div className="characters" {...provided.droppableProps} ref={provided.innerRef}>
              {tasks.map(({ id, text, time, username }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <div
                        className={styles.todoItemWrap}
                        ref={provided.innerRef}
                        {...provided.draggableProps} {...provided.dragHandleProps}
                      >
                        <span>{username}</span>
                        <p> {text} </p>
                        <div style={{ display: "flex", alignItems: 'center', justifyContent: "space-between" }}>
                          <span> {time} </span>
                          <DeleteButton item={tasks} column='tasks' />
                          <EditButton item={tasks} column='tasks' />
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
