const router = require('express').Router()
const { hashPassword } = require('./argon')

let id = 0
const getId = () => ++id

let users = []

// [POST] /api/auth/register
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

// Error handling middleware
router.use((err, req, res, next) => {
  const { message, status = 500 } = err
  console.log(message)
  res.status(status).json({ message })
})

module.exports = router
