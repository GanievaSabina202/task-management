import React, { useState } from 'react'
import { DragDropContext } from "react-beautiful-dnd";
import Todo from '../../component/todo';
import InProgress from '../../component/inprogress';
import InReview from '../../component/inreview';
import Done from '../../component/done';
import Header from '../../component/header';
import { useDispatch } from 'react-redux'
import { todoDrag } from '../../redux/features/tasks/tasksSlice';

const Home = () => {
  let dispatch = useDispatch()

  const onDragEnd = (result) => {
    dispatch(todoDrag(result));
  };


  return (
    <>
      <Header />
      <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Todo />
          <InProgress />
          <InReview />
          <Done />
        </DragDropContext>
      </div>
    </>
  )
}

export default Home