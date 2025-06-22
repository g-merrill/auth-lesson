const router = require('express').Router()
const { hashPassword, verifyPassword } = require('./argon')

let id = 0
const getId = () => ++id

let users = []

router.post('/api/auth/register', async (req, res, next) => {
  const { username, password: plainPassword } = req.body
  if (!users.find(u => u.username === username)) {
    const hash = await hashPassword(plainPassword)
    const newUser = { id: getId(), username, password: hash }
    users.push(newUser)
    res.json(newUser)
  } else {
    next({ status: 409, message: 'username taken' })
  }
})

router.post('/api/auth/login', async (req, res, next) => {
  const { username, password: plainPassword } = req.body
  const user = users.find(u => u.username === username)
  if (!user) {
    next({ status: 401, message: 'invalid credentials' })
  } else {
    const isValid = await verifyPassword(user.password, plainPassword)
    if (isValid) {
      res.json('YOU ARE LOGGED IN')
    } else {
      next({ status: 401, message: 'invalid credentials' })
    }
  }
})

// Error handling middleware
router.use((err, req, res, next) => {
  const { message, status = 500 } = err
  console.log(message)
  res.status(status).json({ message })
})

module.exports = router
