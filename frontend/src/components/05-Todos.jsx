import { useState, useEffect } from 'react'

const URL = '/api/todos'

export default function Todos() {
  const [todoList, setTodoList] = useState([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    async function fetchTodos() {
      const res = await fetch(URL)
      const parsed = await res.json()
      if (res.ok) {
        setTodoList(parsed.data)
      }
      setMessage(parsed.message)
    }
    fetchTodos()
  }, [])

  const onDone = id => () => {
    async function deleteTodo() {
      const res = await fetch(`${URL}/${id}`, {
        method: 'DELETE',
      })
      const parsed = await res.json()
      if (res.ok) {
        setTodoList(parsed.data)
      }
      setMessage(parsed.message)
    }
    deleteTodo(id)
  }
  return (
    <div className="container">
      <h2>Todos</h2>
      <h3>{message}</h3>
      <div>
        {
          todoList.map(todo => {
            return (
              <ul key={todo.id}>
                <li>{todo.label} <button onClick={onDone(todo.id)}>Done!</button></li>
              </ul>
            )
          })
        }
      </div>
    </div>
  )
}
