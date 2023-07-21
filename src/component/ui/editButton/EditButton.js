import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';
import Swal from "sweetalert2";
import moment from "moment";
import { editTask } from '../../../redux/features/tasks/tasksSlice';

const EditButton = ({ item, column }) => {
    const dispatch = useDispatch();

    const editToTask = async () => {
        const { value } = await Swal.fire(
            {
                input: "textarea",
                inputLabel: "Edit Task",
                inputPlaceholder: "Write a edit task",
                showCancelButton: true,
            },
        );
        if (value) {
            dispatch(
                editTask(
                    {
                        id: item[0].id,
                        text: value,
                        time: moment().format("LLLL"),
                        column: column
                    }
                )
            );
        }
    }

    return (
        <IconButton aria-label="edit" size="small">
            <EditIcon onClick={editToTask} />
        </IconButton>
    )
}

export default EditButton
