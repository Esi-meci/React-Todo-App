import React from "react";

function DeleteAll({ setTask }) {
    function deletes (){
        setTask([])
    }
    return (
        <button className='clear_task_btn' onClick={deletes}>Clear All Task</button>
    )
}
export default DeleteAll