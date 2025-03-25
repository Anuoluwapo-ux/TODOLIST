import React from 'react'
import { useDispatch } from 'react-redux'
import { myTodos } from '../redux/api'

const TodoLists = ({id, text, no, display, count, deleteTodo, setTodos}) => {
  const dispatch = useDispatch()

  const myTodo = () => {
    dispatch(myTodos())
}
    
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px'}}>
      <h4 className={`${display}`}>{text}</h4>
      <div style={{display: 'flex', gap: "10px"}}>
        <button style={{color: 'white', background: "orangered", border: "none", width: "50px", height: "25px"}}>finish</button>
        <button style={{color: 'white', background: "orangered", border: "none",  width: "50px", height: "25px"}} onClick={()=> deleteTodo(id)}>delete</button>
      </div>
    </div>
  )
}

export default TodoLists
