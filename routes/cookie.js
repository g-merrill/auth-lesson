const router = require('express').Router()

let visits = 0

router.use('/cookie', (req, res, next) => {
  console.log('Cookie data:')
  console.log(req.headers.cookie?.split('=')[1])
  res.set(
    'Set-Cookie',
    `count=${++visits}; Path=/cookie; Max-Age=3600;`
  )
  next()
})

module.exports = router
