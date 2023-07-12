import React, { useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
const Todo = () => {
  const tasks = useSelector((state) => state.task.tasks);

  return (
    <div style={{ background: "lightgray", padding: "20px", width: "250px" }}>
      <h5>Todo</h5>

      <Droppable droppableId="characters">
        {(provided) => (
          <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map(({ id, text }, index) => {
              return (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <p>
                        {text}
                      </p>
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
}

export default Todo;
