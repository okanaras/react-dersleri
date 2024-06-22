import React from 'react'
import { MdOutlineClear } from "react-icons/md";
import { MdModeEdit } from "react-icons/md"; import '../App.css';

function Todo() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", border: '1px solid lightgray', padding: '10px' }}>
            <div>Ilk Todo</div>
            <div>
                <MdOutlineClear className='todo-icons' />
                <MdModeEdit className='todo-icons' />
            </div>
        </div>
    )
}

export default Todo