const router = require('express').Router()
const { hashPassword, verifyPassword } = require('./bcrypt')

let id = 0
const getId = () => ++id

let users = []

router.post('/api/auth/register', async (req, res, next) => {
  const { username, password: plainPassword } = req.body
  if (users.find(u => u.username === username)) {
    next({ status: 409, message: 'Username taken' })
  } else {
    const hash = await hashPassword(plainPassword)
    const newUser = { id: getId(), username, password: hash }
    users.push(newUser)
    res.json({ message: `✨ Hey ${username}, you registered successfully` })
  }
})

router.post('/api/auth/login', async (req, res, next) => {
  const { username, password: plainPassword } = req.body
  const user = users.find(u => u.username === username)
  if (!user || !(await verifyPassword(plainPassword, user.password))) {
    next({ status: 401, message: 'Invalid credentials' })
  } else {
    req.session.user = user
    res.json({ message: `🍪 Welcome back ${username}, have a cookie...` })
  }
})

router.post('/api/auth/logout', (req, res, next) => {
  req.session.destroy(err => {
    if (err) {
      console.log('Error destroying session:', err)
      next({ message: 'Logout failed' })
    } else {
      res.clearCookie('sessionId')
      res.json({ message: '👋 Logged out' })
    }
  })
})

module.exports = router
