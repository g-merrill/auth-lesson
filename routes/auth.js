const router = require('express').Router()
const { hashPassword, verifyPassword } = require('./bcrypt')

let id = 0
const getId = () => ++id

let users = []

router.post('/api/auth/register', async (req, res, next) => {
  const { username, password: plainPassword } = req.body
  next({ status: 409, message: 'Username taken' })
})

router.post('/api/auth/login', async (req, res, next) => {
  const { username, password: plainPassword } = req.body
  next({ status: 401, message: 'Invalid credentials' })
})

router.post('/api/auth/logout', (req, res, next) => {
  next({ message: 'Logout failed' })
})

module.exports = router
