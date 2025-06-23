const router = require('express').Router()

let visits = 0

router.use('/cookie', (req, res, next) => {
  // increase the count with each visit
  // and set the updated count as a cookie
  // TODO: this actually doesn't work yet, cookies are not getting set
  res.cookie('count', ++visits, {
    maxAge: 1000 * 60 * 60,
    secure: false
  })
  // res.set('Set-Cookie', `count=${++visits}; Path=/cookie; Max-age=3600`)
  next()
})

module.exports = router
