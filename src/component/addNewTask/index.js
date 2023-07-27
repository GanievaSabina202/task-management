import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addToTask } from '../../redux/features/tasks/tasksSlice';
import Swal from "sweetalert2";
import { nanoid } from "nanoid";
import moment from "moment";
import { Button } from '@mui/material';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { fetchUsers } from '../../redux/features/users/usersSlice';

const AddNewTasks = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])

    const users = useSelector((state) => state.users.users);

    const getUsersOptions = () => {
        return users.map((item) => (item.name))
    }

    const addTask = async () => {
        const inputOptions = getUsersOptions();
        let textValue;
        const { value: username } = await Swal.fire(
            {
                input: "textarea",
                inputLabel: "New Task",
                inputPlaceholder: "Write a new task",
                showCancelButton: true,
                html: `
                <select id="usersId" class="swal2-select">
                    ${inputOptions.map(option => `<option value="${option}">${option}</option>`).join('')}
                </select>
            `,
                didOpen: () => {
                    const textarea = Swal.getInput();
                    textarea.addEventListener('input', (event) => {
                        textValue = event.target.value;
                    });
                },
                preConfirm: () => {
                    return document.getElementById('usersId').value;
                }
            }
        );
        if (textValue && username) {
            dispatch(
                addToTask({
                    id: nanoid(),
                    text: textValue,
                    username,
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

export default AddNewTasks;