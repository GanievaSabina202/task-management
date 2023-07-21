import React, { useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import DeleteButton from '../ui/deleteButton/deleteButton';
import EditButton from '../ui/editButton/EditButton';
import styles from '../todo/todo.module.css';

const InReview = () => {
  const InReview = useSelector((state) => state.task.InReview);

  return (
    <>
      <Droppable droppableId="InReview">
        {(provided, snapshot) => (
          <div style={{ backgroundColor: snapshot.isDraggingOver ? 'grey' : 'rgb(123 202 255)', padding: "20px", width: "250px", borderRadius: '5px' }} >
            <h5 style={{ color: "#fff", fontSize: "18px", color: 'rgb(255, 255, 255)', margin: 0}}>InReview</h5>
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
                        <p> {text} </p>
                        <div style={{ display: "flex", alignItems: 'center', justifyContent: "space-between" }}>
                          <span> {time} </span>
                          <DeleteButton item={InReview} column='InReview' />
                          <EditButton item={InReview} column='InReview' />
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
      </Droppable >
    </>
  )
}

export default InReview