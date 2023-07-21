import React, { useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import DeleteButton from '../ui/deleteButton/deleteButton';
import EditButton from '../ui/editButton/EditButton';
import styles from '../todo/todo.module.css';


const Done = () => {
  const Done = useSelector((state) => state.task.Done);

  return (
    <>
      <Droppable droppableId="Done">
        {(provided, snapshot) => (
          <div style={{ backgroundColor: snapshot.isDraggingOver ? 'grey' : 'lightgray', padding: "20px", width: "250px", borderRadius: '5px' }} >
            <h5>Done</h5>
            <div className="characters" {...provided.droppableProps} ref={provided.innerRef}>
              {Done.map(({ id, text, time }, index) => {
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
                          <DeleteButton item={Done} column='Done' />
                          <EditButton />
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
  )
}

export default Done