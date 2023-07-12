import React from 'react'
import AddNewTasks from '../addNewTask'

const Header = () => {
    return (
        <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
            <h1>Task Managment</h1>
            <AddNewTasks />
        </div>
    )
}

export default Header