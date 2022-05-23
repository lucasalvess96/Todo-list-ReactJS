import { useState } from "react"

function Todo(){
    const [edit, setEdit] = useState( {id: null, value: ''} )
    return todos.map((todo,index) => (
        <div className={todo.iscomplete?'todo-row complete': 'todo-row'} key={index}>
            <div key={todo.id} onClick={() => {completeTodo(todo.id)}}>
                {todo.text}
            </div>
            <div className="icons">
                
            </div>
        </div>
    ))
}

export default Todo