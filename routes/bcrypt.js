const bcrypt = require('bcryptjs')

async function hashPassword(plainPassword) {
  try {
    // on success return hash
    const hash = await bcrypt.hash(plainPassword, 10)
    return hash
  } catch (error) {
    // on error throw
    console.log('Hashing went wrong')
    throw new Error('hashPassword not implemented!')
  }
}

async function verifyPassword(plainPassword, hash) {
  try {
    // on valid password return true
    await bcrypt.compare(plainPassword, hash)
    return true
  } catch (error) {
    // on invalid return false
    
    return false
  }
}

module.exports = { hashPassword, verifyPassword }
