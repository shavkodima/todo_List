import { useContext } from "react"
import { ContextTodos } from "../component/hoc/ContextTodo"


const useContextTodo = ()=>{
    return useContext(ContextTodos)
}

export default useContextTodo;