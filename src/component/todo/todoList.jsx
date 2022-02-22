import React, { useEffect, useState } from "react";
import TodoListItem from "./todoListItem";
import classes from "./todoList.module.css";
import HeaderTodo from "../headerTodo/todoHeader";
const filtersConfig = [
    {
        title: "Все",
        action: 'all',
        activ: true
    },
    {
        title: "Выполненые задачи",
        action: 'completed',
        activ: false
    }
]

const TodoList = ({ todoTask, statusTask, deleteTask }) => {

    const [filter, setFilter] = useState(filtersConfig[0].action)
    const [countCompletedTask, setCountCompletedTask] = useState(0)
    const [btnFilter, setBtnFilter] = useState(filtersConfig)

    useEffect(() => {
        const arr = todoTask.filter((elem) => elem.status);
        if (arr.length === 0) {
            setFilter(filtersConfig[0].action);
            setBtnFilter(filtersConfig)
        }

        setCountCompletedTask(arr.length)
    }, [todoTask])


    const removeActivitiClass = (action) => {
        const btnActiv = btnFilter.map((elem) => elem.action === action ? { ...elem, activ: true } : { ...elem, activ: false })
        setBtnFilter(btnActiv)
    }

    const filterTask = (action) => {
        removeActivitiClass(action)
        setFilter(action)
    }

    return (
        <div className={classes.todo_list}>
            <HeaderTodo count={countCompletedTask} btnFilter={btnFilter} filterTask={filterTask} lengthTask ={todoTask.length}/>
            <ul>
                {
                    filter === btnFilter[1].action && countCompletedTask === 0 ?
                        <p className={classes.todo_zero}>Нет выполненых задач</p> 
                        :
                        filter === btnFilter[1].action && todoTask.map(elem => {
                            return elem.status ?
                                <TodoListItem key={elem.id} data={elem} statusTask={statusTask} deleteTask={deleteTask} />
                                : null
                        })
                }
                {
                    filter === btnFilter[0].action && todoTask.length === 0 ?
                        <p className={classes.todo_zero}>Нет задач</p> 
                        :
                        filter === btnFilter[0].action && todoTask.map(elem => {
                            return <TodoListItem key={elem.id} data={elem} statusTask={statusTask} deleteTask={deleteTask} />
                        })
                }
            </ul>
        </div>
    )
}


export default TodoList;