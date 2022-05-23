import { useState } from "react"

function TodoForm(props){
    const [input, setInput] = useState('')

    function handleSubmit(event){
        event.preventDefault()
        props.onSubmit({
            id:Math.floor(Math.random() * 1000),
            text: input
        })
        setInput('')
    }

    return(
        <>
            <form action="" className="todo-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="add a todo"
                    value={input}
                    name="text"
                    className='todo-input'
                    onChange={(event) => {setInput(event.target.value)}}
                />
                <button className="todo-button">Add todo</button>
            </form>
        </>
    )
}

export default TodoForm