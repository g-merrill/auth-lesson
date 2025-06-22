async function hashPassword(plainPassword) {
  throw new Error('hashPassword not implemented!')
}

async function verifyPassword(plainPassword, hash) {
  return false
}

module.exports = { hashPassword, verifyPassword }
