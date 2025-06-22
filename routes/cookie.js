const router = require('express').Router()

let visits = 0

router.use('/cookie', (req, res, next) => {
  // increase the count with each visit
  // and set the updated count as a cookie
  next()
})

module.exports = router
