import React, { useContext, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, setSearch } from "../../store/cerateActions";
import classes from './headerTodo.module.css';

const filtersBtnsConfig = [
    {
        title: "Все",
        value: 'all',
    },
    {
        title: "Выполненые задачи",
        value: 'done',
    },
    {
        title: "Важные",
        value: 'important',
    }
]

const HeaderTodo = () => {
    const filters = useSelector(store=> store.filters);
    const dispath = useDispatch();

    const btns = filtersBtnsConfig.map(btn=>{
    const isActiv = btn.value === filters;
        return (
            <button
                key={btn.value}
                type="button"
                className={isActiv ? classes.activ : ''}
                onClick = {()=>dispath(setFilter(btn.value))}
            >
                {btn.title}
            </button>
        )
    })



    return (
        <div className={classes.todo_header}>
            <div className={classes.header_item + ' ' + classes.search} >
                <input type="search" 
                className={classes.todo_search} 
                onChange={(e)=> dispath(setSearch(e.target.value))}
                placeholder="Поиск задачи"
                />
            </div>
            <div className={classes.header_item}>
               {btns}
            </div>
            {/* <p>Всего записей: {lengthTask} <span>Выполненых: {countCompleted}</span></p> */}
        </div>
    )
}

export default React.memo(HeaderTodo);