import React from 'react';
import { useDispatch } from 'react-redux'
import { addToTask } from '../../redux/features/tasks/tasksSlice';
import Swal from "sweetalert2";
import { nanoid } from "nanoid";
import moment from "moment";
const AddNewTasks = () => {
    const dispatch = useDispatch();

    const addTask = async () => {
        const { value } = await Swal.fire({
            input: "textarea",
            inputLabel: "New Task",
            inputPlaceholder: "Write a new task",
            showCancelButton: true,
        });
        if (value) {
            console.log(value);
            dispatch(
                addToTask({
                    id: nanoid(),
                    text: value,
                    time: moment().format("LL"),
                })
            );
        }
    }


    return (
        <div>
            <button onClick={addTask}>Add new Task</button>
        </div>
    )
}

export default AddNewTasks