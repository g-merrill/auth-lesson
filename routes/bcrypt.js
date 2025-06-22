// const argon2 = require('argon2')
const bcrypt = require('bcryptjs')

async function hashPassword(plainPassword) {
  try {
    const saltRounds = 12 // Higher = more secure, but slower
    const salt = await bcrypt.genSalt(saltRounds)
    const hash = await bcrypt.hash(plainPassword, salt)
    return hash
  } catch (err) {
    console.error('Hashing failed (bcryptjs):', err)
    throw err
  }
}

async function verifyPassword(plainPassword, hash) {
  try {
    return await bcrypt.compare(plainPassword, hash)
  } catch (err) {
    console.error('Verification failed (bcryptjs):', err)
    return false
  }
}

module.exports = { hashPassword, verifyPassword }
