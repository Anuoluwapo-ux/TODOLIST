import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTodos, deleteTodos, myTodo } from '../redux/actions/todosAction'
import TodoLists from './TodoLists';

let count = 0

const Todo = () => {
    useEffect(() => {
        dispatch(myTodo())
    }, [])
  

    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const { todos } = useSelector(state => state.todos)
    console.log(todos);
    const inputRef = useRef();

 

    const addTodo = (e) => {
        e.preventDefault()        
        const data = {
            no: count++,
            text,
            display: '',
        }
        dispatch(createTodos(data))
        console.log('Normal data todo', data);
    }

    const deleteTodo = (id) => {
       dispatch(deleteTodos(id))
    }
 
    return (
        <div style={{margin: "30px"}}>
            <div>
                <form style={{display: 'flex', gap: "30px"}} action="" onSubmit={addTodo}>
                    <input onChange={(e) => setText(e.target.value)} type="text" placeholder="add your todo" />
                    <button style={{color: 'white', background: 'orangered', border: "none", width: '60px', fontSize: "20px"}}>+</button>
                </form>
            </div>
            <div style={{ color: 'white' }}>
                {todos.map(todo => {
                    return (
                        <TodoLists
                            key={todo._id}
                            text={todo.text}
                            display={todo.display}
                            count={todo.count}
                            deleteTodo={() => deleteTodo(todo._id)}
                            id={todo._id}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Todo
