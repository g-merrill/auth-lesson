const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 9009

let todos = [
  { id: 1, label: "Refactor the refactor of the refactor", completed: false },
  { id: 2, label: "Convince rubber duck I'm not the problem", completed: false },
  { id: 3, label: "Rename variables to something less shameful", completed: false },
  { id: 4, label: "Google how to center a div (again)", completed: false },
  { id: 5, label: "Add one more console.log for good luck", completed: false }
]

app.use(cors())
app.get('/api/todos', (req, res) => {
  res.json(todos)
})
app.delete('/api/todos/:id', (req, res) => {
  const { id } = req.params
  todos = todos.filter(todo => todo.id != id)
  res.json(todos)
})
app.use('*', (req, res) => {
  res.send(`
<ul>
  <li>[GET] /api/todos</li>
  <li>[DELETE] /api/todos/:id</li>
<ul>
`)
})

app.listen(PORT, () => {
  console.log(`Todos API running on ${PORT}`)
})
