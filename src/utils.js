export const createTodo = (title)=>{
    return ({
        id:Date.now(),
        title,
        done:false,
        important:false
    })
}