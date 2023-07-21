import React from 'react'
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const EditButton = () => {
    return (
        <IconButton aria-label="edit" size="small">
            <EditIcon />
        </IconButton>
    )
}

export default EditButton
