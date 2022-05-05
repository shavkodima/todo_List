import { ADD_TODO_ACTION, GET_LOCALSTORAGE_ACTION, REMOVE_TODO_ACTION, SET_FILTERS, SET_SEARCH, DONE_TODOS_ACTION, IMPORTANT_TODOS_ACTION } from "./actions"

export const createActionAddTodo = (todoObject)=>{
    return {
        type:ADD_TODO_ACTION,
        payload:todoObject
    }
}


export const getLoacalStorageAction = (todo)=>{
    return {
        type:GET_LOCALSTORAGE_ACTION,
        payload:todo
    }
}

export const setFilter = (filter)=>{

    return {
        type: SET_FILTERS,
        payload:filter
    }
}

export const setSearch = (value)=>{
    return{
        type:SET_SEARCH,
        payload:value
    }
}


export const doneTodoAction = (id) =>{
    return {
        type:DONE_TODOS_ACTION,
        payload: id
    }
}

export const importantTodoAction = (id) =>{
    return {
        type:IMPORTANT_TODOS_ACTION,
        payload: id
    }
}

export const deleteTodoAction = (id) =>{
    return {
        type:REMOVE_TODO_ACTION,
        payload: id
    }
}