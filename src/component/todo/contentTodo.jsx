import React, { useEffect } from "react";
import Forms from "../form/form";
import { useState } from "react";
import TodoList from "./todoList";
import classes from './contentTodo.module.css'

import ContextTodoList from "../hoc/ContextTodo";


const ContentTodo = () => {

    return (
        <div className="wrapper">
            <div className="container">
                <section className={classes.todo}>
                    <ContextTodoList>
                        <Forms />
                        <TodoList />
                    </ContextTodoList>
                </section>
            </div>
        </div>
    )
}

export default React.memo(ContentTodo);