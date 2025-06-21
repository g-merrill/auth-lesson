const { createProxyMiddleware } = require('http-proxy-middleware')
const path = require('path')
const express = require('express')
const chalk = require('chalk')

const app = express()
const PORT = process.env.PORT || 9000

let todos = [
  { id: 1, label: "Refactor the refactor of the refactor", completed: false },
  { id: 2, label: "Convince rubber duck I'm not the problem", completed: false },
  { id: 3, label: "Rename variables to something less shameful", completed: false },
  { id: 4, label: "Ask ChatGPT how to center a div (again)", completed: false },
  { id: 5, label: "Add one more console.log for good luck", completed: false }
]

app.get('/api/todos', (req, res) => {
  res.json(todos)
})

app.delete('/api/todos/:id', (req, res) => {
  console.log('dis hapenz')
  const { id } = req.params
  todos = todos.filter(todo => todo.id != id)
  res.json(todos)
})

if (process.env.RENDER) {
  console.log('RUNNING IN PROD')
  app.use(express.static(path.join(__dirname, 'frontend', 'dist')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  })
} else {
  console.log('RUNNING IN DEV')
  app.use(
    '/',
    createProxyMiddleware({
      target: 'http://localhost:5173',
      changeOrigin: true,
      ws: true,
    })
  )
}

app.listen(PORT, () => {
  console.log(
    chalk.greenBright.bold('✅ Auth Lesson Ready. Let\'s go! =====> ') +
    chalk.cyanBright(`Listening on `) +
    chalk.yellowBright(`http://localhost:${PORT} `) +
    '🚀🔥'
  )
})
