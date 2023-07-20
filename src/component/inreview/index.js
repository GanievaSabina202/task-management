import React, { useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import styles from '../todo/todo.module.css';

const InReview = () => {
  const InReview = useSelector((state) => state.task.InReview);
  return (
    <>
      <Droppable droppableId="InReview">
        {(provided, snapshot) => (
          <div style={{ backgroundColor: snapshot.isDraggingOver ? 'grey' : 'lightgray', padding: "20px", width: "250px", borderRadius: '5px' }} >
            <h5>InReview</h5>
            <div className="characters" {...provided.droppableProps} ref={provided.innerRef}>
              {InReview.map(({ id, text, time }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <div
                        className={styles.todoItemWrap}
                        ref={provided.innerRef}
                        {...provided.draggableProps} {...provided.dragHandleProps}
                      >
                        <p>
                          {text}
                        </p>
                        <span>{time}</span>
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

export default InReview