import React, { useState } from "react";
import classes from './form.module.css'

const Forms = ({ handlerState, handlerSubmit }) => {

    const [taskValue, setTaskValue] = useState('')
    const [checkValid, setCheckValid] = useState(true)

    const handlerInput = (valueInput) => {
            setTaskValue(valueInput)
            handlerState(valueInput) 
            setCheckValid(true)
    }

    const submit = ()=>{ 
        if(taskValue !== ''){
            handlerSubmit();
            setTaskValue('')
        }else{
            setCheckValid(prev=> !prev)
        }   
    }

    return (
        <form onSubmit={(e) => { e.preventDefault(); submit(); }} className={classes.form_todo}>
            <div className={`${classes.form_item} ${classes.form_item_left}`}>
                <input type="text" value={taskValue} onChange={(e) => handlerInput(e.target.value)} placeholder='Введите задачу' />
                <span className={classes.error} >{!checkValid?'Поле не может быть пустым':''}</span>
            </div>
            <div className={classes.form_item}>
                <button className={classes.button}>Добавить задачу</button>
            </div>
        </form>
    )
}


export default Forms;