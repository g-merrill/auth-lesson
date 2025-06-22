const path = require('path')
const express = require('express')
const session = require('express-session')
const { createProxyMiddleware } = require('http-proxy-middleware')
const chalk = require('chalk')

const authRouter = require('./routes/auth')
const todosRouter = require('./routes/todos')

const app = express()
app.use(express.json())

let sessionConfig = {
  name: 'sessionId',
  secret: 'keep it secret, keep it safe',
  cookie: {
    maxAge: 1000 * 60,
    secure: process.env.RENDER ? true : false,
    httpOnly: false,
  },
  resave: false,
  saveUninitialized: false,
}

app.set('trust proxy', 1) // to deploy to render
app.use(session(sessionConfig))
app.use(authRouter)
app.use(todosRouter)

if (process.env.RENDER) {
  console.log('running in PROD')
  app.use(express.static(path.join(__dirname, 'frontend', 'dist')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  })
} else {
  console.log('running in DEV')
  app.use(
    '/',
    createProxyMiddleware({
      target: 'http://localhost:5173',
      changeOrigin: true,
      ws: true,
    })
  )
}

const PORT = process.env.PORT || 9000
app.listen(PORT, () => {
  console.log(
    chalk.greenBright.bold('\n✅ Auth Lesson Ready. Let\'s go! ===> ') +
    chalk.cyanBright(`Listening on `) +
    chalk.yellowBright('http://localhost') +
    chalk.yellowBright.bold(`:${PORT} `) +
    chalk.greenBright.bold(' <=== 🚀🔥\n')
  )
})
