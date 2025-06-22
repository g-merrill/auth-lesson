import { useState, useEffect, useRef } from 'react'

export default function Register() {
  const [message, setMessage] = useState('')
  const userRef = useRef(null)
  const passRef = useRef(null)

  const onSubmit = evt => {
    const action = evt.nativeEvent.submitter.name
    evt.preventDefault()
    const username = userRef.current.value
    const password = passRef.current.value
    const register = async () => {
      const res = await fetch(`/api/auth/${action}`, {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      })
      const parsed = await res.json()
      setMessage(parsed.message)
    }
    register()
  }
  return (
    <div className='container'>
      <h2>{message}</h2>
      <form onSubmit={onSubmit}>
        <input ref={userRef} />
        <input ref={passRef} />
        <button name="register">Rgister</button>
        <button name="login">Login</button>
        <button name="logout">Logout</button>
      </form>
    </div>
  )
}
