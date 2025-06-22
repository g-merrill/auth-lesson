const router = require('express').Router()

let visits = 0

router.use('/cookie', (req, res, next) => {
  next()
})

module.exports = router
