import React from "react";
import classes from './todoListItem.module.css'


const TodoListItem = ({ data, statusTask, deleteTask }) => {

    const handlerStatus = (id) => {
        statusTask(id)
    }

    const handlerDeleteTask = (id) => {
        deleteTask(id)
    }


    return (
        <li className={classes.list_item}>
            <label htmlFor={data.id} className={data.status ? classes.completed : ''}>{data.title}</label>
            <div className={classes.control}>
                <input type='checkbox' id={data.id} onChange={(e) => handlerStatus(data.id)} />
                <button className={classes.delete} onClick={(e) => handlerDeleteTask(data.id)}>x</button>
            </div>
        </li>
    )
}

export default TodoListItem;