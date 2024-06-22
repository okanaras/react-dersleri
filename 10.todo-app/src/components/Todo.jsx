import React from 'react'
import { MdOutlineClear } from "react-icons/md";
import { MdModeEdit } from "react-icons/md"; import '../App.css';

function Todo({ todo, okan }) {
    const { id, content } = todo;

    const removeTodo = () => {
        okan(id);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", border: '1px solid lightgray', padding: '10px', marginTop: '10px' }}>
            <div>{content}</div>
            <div>
                <MdOutlineClear className='todo-icons' onClick={removeTodo} />
                <MdModeEdit className='todo-icons' />
            </div>
        </div>
    )
}

export default Todo