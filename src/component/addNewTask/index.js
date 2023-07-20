import React from 'react';
import { useDispatch } from 'react-redux'
import { addToTask } from '../../redux/features/tasks/tasksSlice';
import Swal from "sweetalert2";
import { nanoid } from "nanoid";
import moment from "moment";
import { Button } from '@mui/material';
import PostAddIcon from '@mui/icons-material/PostAdd';

const AddNewTasks = () => {
    const dispatch = useDispatch();

    const addTask = async () => {
        const { value } = await Swal.fire(
            {
                input: "textarea",
                inputLabel: "New Task",
                inputPlaceholder: "Write a new task",
                showCancelButton: true,
            },
        );
        if (value) {
            console.log(value);
            dispatch(
                addToTask({
                    id: nanoid(),
                    text: value,
                    time: moment().format("LLLL"),
                })
            );
        }
    }


    return (
        <div>
            <Button onClick={addTask} variant="contained" color="success" size="large">
                <PostAddIcon />
            </Button>
        </div>
    )
}

export default AddNewTasks