import React from "react";
import classes from './headerTodo.module.css';

const HeaderTodo = ({countCompleted, btnFilter, filterTask, lengthTask}) => {
    return (
        <div className={classes.todo_header}>
            <div className="header_item">
                <p>Всего записей: {lengthTask} <span>Выполненых: {countCompleted}</span></p>
            </div>
            <div className="header_item">
                {
                    btnFilter.map((elem) => { return <button className={elem.activ ? `${classes.activ}` : classes.btn} key={elem.action} onClick={(e) => filterTask(elem.action)}>{elem.title}</button> })
                }
            </div>
        </div>
    )
}

export default HeaderTodo;