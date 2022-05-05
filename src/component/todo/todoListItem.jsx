import React from "react";
import useContextTodo from "../../hooks/useContextTodo";
import classes from './todoListItem.module.css'
import important_image from '../../image/icon/important.png'


const TodoListItem = ({ data}) => {
    const {id, title, done, important} = data;
    const {deleteTodo, doneTodo, importantTodo} = useContextTodo();
    const styleItem = important ? classes.list_item + " " + classes.important_style:classes.list_item;

    return (
        <li className={styleItem}>
            <div className={classes.image_todo}>
                {important ? <img src={important_image} alt="important_img" className={classes.img} /> : ""}
            </div>
            <div className={classes.description_todo}>
            <label htmlFor={data.id} className={done ? classes.completed : ''}>{title}</label>
                <input type='checkbox' id={data.id}  onClick={()=> doneTodo(id)}/>
            </div>
            <div className={classes.control}>
                <button className={classes.important} onClick={()=> importantTodo(id)}>Важное</button>
                <button className={classes.delete} onClick={()=>deleteTodo(id)}>x</button>
            </div>
        </li>
    )
}

export default React.memo(TodoListItem);