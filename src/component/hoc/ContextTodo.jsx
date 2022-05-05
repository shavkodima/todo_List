import React, { createContext, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createActionAddTodo, deleteTodoAction, doneTodoAction, importantTodoAction } from "../../store/cerateActions";
import { createTodo } from "../../utils";
const initailValue = {
    todo:[]
}

export const ContextTodos = createContext(initailValue);

const ContextTodoList = ({children})=>{

    const  {todo, filters, search} = useSelector((store)=> store);
    const dispath = useDispatch()

    const addTodo = (todo)=>{ 
        dispath(createActionAddTodo(createTodo(todo))) 
    }

    const deleteTodo =(id)=>{
        dispath(deleteTodoAction(id))
    }

    const doneTodo = (id) =>{
        dispath(doneTodoAction(id))
    }

    const importantTodo = (id) =>{
        dispath(importantTodoAction(id))
    }

    const searchTodo = todo.filter(elem=>{
        return elem.title.toLowerCase().indexOf(search.toLowerCase()) != -1;
    })

    const todos = searchTodo.filter(elem=>{
       switch(filters){
           case 'important':
           return elem.important
           case 'done':
               return elem.done
            default :
            return true;
       }
    })

    const value = {
        todos,
        addTodo,
        deleteTodo,
        doneTodo,
        importantTodo
    }

    
    return (
        <ContextTodos.Provider value = {value}>
            {children}
        </ContextTodos.Provider>
    )
}

export default React.memo(ContextTodoList);


