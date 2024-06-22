import React, { useState } from 'react'
import { MdOutlineClear } from "react-icons/md";
import { MdModeEdit } from "react-icons/md"; import '../App.css';
import { FaCheck } from "react-icons/fa";

function Todo({ todo, okan, onUpdateTodo }) {
    const { id, content } = todo;

    const [editable, setEditable] = useState(false);
    const [newTodo, setNewTodo] = useState(content);

    const removeTodo = () => {
        okan(id);
    };

    const updateTodo = () => {

        const request = {
            id: id,
            content: newTodo
        };

        onUpdateTodo(request);
        setEditable(false);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", border: '1px solid lightgray', padding: '10px', marginTop: '10px' }}>
            <div>
                {
                    editable ? <input type='text' className='todo-input' style={{ width: '380px' }} value={newTodo} onChange={(e) => setNewTodo(e.target.value)} /> : content
                }
            </div>
            <div>
                <MdOutlineClear className='todo-icons' onClick={removeTodo} />
                {
                    editable ? <FaCheck className='todo-icons' onClick={updateTodo} /> : <MdModeEdit className='todo-icons' onClick={() => setEditable(true)} />
                }
            </div>
        </div>
    )
}

export default Todo