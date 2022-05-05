import { useState } from "react";


const useInputTodo = ()=>{
    const [value, setValue] = useState("")
    const [error, setError] = useState({});

    const onChange = (value) =>{
        setValue(value)

        if(value.length === 0){
            return setError({status:false, message:"Поле не может быть пустым"})
        }
        if(value.length < 5){
            return setError({status:false, message:"Длина строки должна быть не менее 5 символом"})
        }
        
        return setError({status:true, message:""})
    }

    return {value, error, onChange, setValue}

}


export default useInputTodo;