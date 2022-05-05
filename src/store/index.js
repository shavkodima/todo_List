import { useSelector } from "react-redux";
import { createStore } from "redux";
import {ADD_TODO_ACTION, GET_LOCALSTORAGE_ACTION, REMOVE_TODO_ACTION, SET_FILTERS, SET_SEARCH, DONE_TODOS_ACTION, IMPORTANT_TODOS_ACTION} from './actions';
const initialState = {
    todo:[],
    filters:'all',
    search: ''
}
const ReducerTodo = (state = initialState, action)=>{
    const {type, payload} = action;

    switch(type){
        case ADD_TODO_ACTION:
            return {...state, todo:[...state.todo, payload]}
        case GET_LOCALSTORAGE_ACTION:
            return {...state, todo:[...payload]}
        case DONE_TODOS_ACTION:
            return {...state, todo:state.todo.map(todos=> {
                if (todos.id === payload) {
                    todos.done = !todos.done ;
                }
                return todos;
            })} 
        case IMPORTANT_TODOS_ACTION:
            return {...state, todo:state.todo.map(todos=>{
                if(todos.id === payload){
                    todos.important = !todos.important
                }
                return todos;
            })}    
        case SET_FILTERS:
            return {...state, filters:payload}    
        case SET_SEARCH:
            return {...state, search:payload}
        case REMOVE_TODO_ACTION:
            return {...state, todo:state.todo.filter(elem => elem.id !== payload)}    
         default:
             return state   
    }
}   

const store = createStore(ReducerTodo);

store.subscribe(() => {
    const {todo} = store.getState((prev=> prev))
    localStorage.setItem('todo', JSON.stringify(todo))
})


export default store