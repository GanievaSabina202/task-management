import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../../redux/features/tasks/tasksSlice';


const DeleteButton = (item, column) => {

    const dispatch = useDispatch()

    const Delete = (item) => {
        dispatch(deleteTask({ ...item, column: `${item.column}` }));
    }

    return (
        <IconButton aria-label="delete" size="small" onClick={() => { Delete(item, column) }}>
            <DeleteIcon />
        </IconButton>
    )
}

export default DeleteButton
