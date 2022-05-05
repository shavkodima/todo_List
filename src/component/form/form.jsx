import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../../utils";
import classes from './form.module.css'
import useContextTodo from "../../hooks/useContextTodo";
import useInputTodo from "../../hooks/useInputTodo";

const Forms = () => {
    const {addTodo} = useContextTodo();
    const {value, error, onChange} = useInputTodo();


    const submit = (e) =>{
        e.preventDefault();
        if(error.status){
            addTodo(value)
        }
    }


    return (
        <>
        <form onSubmit={submit} className={classes.form_todo}>
            <div className={`${classes.form_item} ${classes.form_item_left}`}>
                <input type="text" 
                value={value} 
                onChange={(e) => onChange(e.target.value)}
                 placeholder='Введите новую задачу' />
                <span className={classes.error} >{!error.status?error.message:''}</span>
            </div>
            <div className={classes.form_item}>
                <button className={classes.button}>Добавить задачу</button>
            </div>
        </form>
        </>      
    )
}


export default React.memo(Forms);