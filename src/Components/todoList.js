import { useState } from 'react'
import TodoForm from './todoForm'

function TodoList(){
    const [todos, setTodos] = useState([])

    function addTodo(todo){
        if(!todo.text || /^\s*s/.test(todo.text)){
            return
        }
        const newtodos = [todo, ...todos]
        setTodos(newtodos)
        // console.log(newtodos)
    }

    return(
        <>
            <h1>What's the plan for today?</h1>
            <TodoForm onSubmit={addTodo}/>
        </>
    )
}

export default TodoList