import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import Swal from "sweetalert2";
import moment from "moment";
import { editTask } from '../../../redux/features/tasks/tasksSlice';

const EditButton = ({ item, column }) => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);

    const getUsersOptions = () => {
        return users.map((item) => (item.name))
    }

    const editToTask = async () => {
        const inputOptions = getUsersOptions();
        let textValue;
        const { value: username } = await Swal.fire(
            {
                input: "textarea",
                inputLabel: "Edit Task",
                inputPlaceholder: "Write a edit task",
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
                editTask({
                    id: item[0].id,
                    text: textValue,
                    username,
                    time: moment().format("LLLL"),
                    column: column
                })
            );
        }
    }

    // const editToTask = async () => {
    //     const { value } = await Swal.fire(
    //         {
    //             input: "textarea",
    //             inputLabel: "Edit Task",
    //             inputPlaceholder: "Write a edit task",
    //             showCancelButton: true,
    //         },
    //     );
    //     if (value) {
    //         dispatch(
    //             editTask(
    //                 {
    //                     id: item[0].id,
    //                     text: value,
    //                     time: moment().format("LLLL"),
    //                     column: column
    //                 }
    //             )
    //         );
    //     }
    // }

    return (
        <IconButton aria-label="edit" size="small">
            <EditIcon onClick={editToTask} />
        </IconButton>
    )
}

export default EditButton
