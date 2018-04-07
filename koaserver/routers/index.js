const router = require('koa-router')()

const home = require('./home')
const api = require('./api')

router.use('/index', home.routes(), home.allowedMethods())
router.use('/api', api.routes(), api.allowedMethods())
//router.use('/error', error.routes(), error.allowedMethods())
module.exports = router