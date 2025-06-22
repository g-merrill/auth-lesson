const router = require('express').Router()

let todos = [
  { id: 1, label: "Refactor the refactor of the refactor", completed: false },
  { id: 2, label: "Convince rubber duck I'm not the problem", completed: false },
  { id: 3, label: "Rename variables to something less shameful", completed: false },
  { id: 4, label: "Ask ChatGPT how to center a div (again)", completed: false },
  { id: 5, label: "Add one more console.log for good luck", completed: false }
]

router.get('/api/todos', (req, res) => {
  res.json(todos)
})

router.delete('/api/todos/:id', (req, res) => {
  const { id } = req.params
  todos = todos.filter(todo => todo.id != id)
  res.json(todos)
})

module.exports = router
