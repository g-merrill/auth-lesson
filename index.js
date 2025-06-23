const path = require('path')
const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const morgan = require('morgan')
const chalk = require('chalk')
const cors = require('cors')
const session = require('express-session')

const authRouter = require('./routes/auth')
const todosRouter = require('./routes/todos')
const cookieRouter = require('./routes/cookie')

const app = express()
app.use(express.json())
app.use(cors())


let sessionConfig = {
  name: 'sessionId',
  secret: 'keep it secret, keep it safe',
  cookie: {
    maxAge: 1000 * 60 * 5,
    secure: process.env.RENDER ? true : false,
    httpOnly: false,
  },
  resave: false,
  saveUninitialized: false,
}

app.use(session(sessionConfig))
app.use(morgan('dev'))
app.set('trust proxy', 1) // works alongside "secure" cookie setting
app.use(cookieRouter)
app.use(authRouter)
app.use(todosRouter)

// Both API and static assets (the React app) served from same origin
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

// Error handling middleware
app.use((err, req, res, next) => {
  const { message, status = 500 } = err
  console.log(message)
  res.status(status).json({ message: '☠️ ' + message })
})

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
