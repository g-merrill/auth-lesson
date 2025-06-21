
import { Routes, Route, NavLink } from 'react-router'
import Hashing from './components/01-Hashing'
import Register from './components/02-Register'
import Cookie from './components/03-Cookie'
import Login from './components/04-Login'
import Todos from './components/05-Todos'

export default function App() {
  return (
    <>
      <h1>Auth Lesson</h1>
      <nav>
        <NavLink to="/">Hashing</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/cookie">Cookie</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/todos">Todos</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Hashing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cookie" element={<Cookie />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </>
  )
}
