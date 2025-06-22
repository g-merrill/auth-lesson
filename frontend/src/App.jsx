
import { Routes, Route, NavLink } from 'react-router'
import Auth from './components/01-Auth'
import Hashing from './components/02-Hashing'
import Bcrypt from './components/03-Bcrypt'
import Cookie from './components/04-Cookie'
import Todos from './components/05-Todos'

export default function App() {
  return (
    <>
      <h1>Auth Lesson</h1>
      <nav>
        <NavLink to="/">Auth</NavLink>
        <NavLink to="/todos">Todos</NavLink> |
        <NavLink to="/hashing">Hashing</NavLink>
        <NavLink to="/bcrypt">Bcrypt</NavLink>
        <NavLink to="/cookie">Cookie</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/hashing" element={<Hashing />} />
        <Route path="/cookie" element={<Cookie />} />
        <Route path="/bcrypt" element={<Bcrypt />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </>
  )
}
