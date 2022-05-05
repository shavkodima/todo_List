import React, { useMemo } from "react";
import TodoListItem from "./todoListItem";
import classes from "./todoList.module.css";
import HeaderTodo from "../headerTodo/todoHeader";
import useContextTodo from "../../hooks/useContextTodo";


const TodoList = () => {

    const {todos} = useContextTodo()


    return (
        <div className={classes.todo_list}>
            <HeaderTodo/>
            <ul>
                {
                todos.length > 0 ?
                todos.map(elem => {return <TodoListItem key={elem.id} data={elem} />}):
                <h1 className={classes.todo_zero}>Пусто</h1>
                }
            </ul>
        </div>
    )
}


export default TodoList;