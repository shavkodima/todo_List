import React, { useEffect } from "react";
import Forms from "../form/form";
import { useState } from "react";
import TodoList from "./todoList";
import classes from './contentTodo.module.css'



function newTodo(title) {
    this.id = Date.now()
    this.title = title;
    this.status = false;
}

const ContentTodo = () => {

    const [valueTask, setValueTask] = useState('');
    const [data, setData] = useState([])

    useEffect(() => {
        if (!localStorage.getItem('todo')) {
            setData([]);
        } else {
            const data = localStorage.getItem('todo')
            const parseData = JSON.parse(data);
            setData(parseData)
        }

    }, [])


    useEffect(()=>{
        localStorage.setItem('todo', JSON.stringify(data))
    }, [data])



    const newTask = (value) => {
        setValueTask(value)
    }

    const submitTask = () => {
        const task = new newTodo(valueTask);
        setData((prev) => [...prev,  {...task} ])
    }

    const statusTask = (id) => {

        const arr = data.map((elem) => {
            if (elem.id === id && !elem.status) {
                elem.status = true;
            } else if (elem.id === id && elem.status) {
                elem.status = false;
            }
            return elem;
        })
        setData(arr)
    }

    const deleteTask = (id) => {
        const arr = data.filter(elem => {
            return elem.id !== id
        })
        setData(arr)
    }

    return (
        <div className="wrapper">
            <div className="container">
                <section className={classes.todo}>
                    <Forms handlerState={newTask} handlerSubmit={submitTask} />
                    <TodoList todoTask={data} statusTask={statusTask} deleteTask={deleteTask} />
                </section>
            </div>
        </div>
    )
}

export default ContentTodo;