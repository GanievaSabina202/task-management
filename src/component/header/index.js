import React from 'react'
import AddNewTasks from '../addNewTask'

const Header = () => {
    return (
        <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
            <h2 style={{ width: "100%", textAlign: 'center' }}>Task Managment</h2>
            <AddNewTasks />
        </div>
    )
}

export default Header