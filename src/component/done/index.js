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
          <div style={{ backgroundColor: snapshot.isDraggingOver ? 'grey' : '#07bc0c', padding: "20px", width: "250px", height: 'fit-content',  borderRadius: '5px' }} >
            <h5 style={{ color: "#fff", fontSize: "18px", color: 'rgb(255, 255, 255)', margin: 0 }}>Done</h5>
            <div className="characters" {...provided.droppableProps} ref={provided.innerRef}>
              {Done.map(({ id, text, time, username }, index) => {
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
                          <DeleteButton item={Done} column='Done' />
                          <EditButton item={Done} column='Done' />
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