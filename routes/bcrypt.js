async function hashPassword(plainPassword) {
  // on success return hash
  // on error throw
  throw new Error('hashPassword not implemented!')
}

async function verifyPassword(plainPassword, hash) {
  // on valid password return true
  // on invalid return false
  return false
}

module.exports = { hashPassword, verifyPassword }
