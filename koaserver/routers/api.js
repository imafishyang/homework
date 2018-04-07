const router = require('koa-router')()
const HandApi = require('./../controllers/handapi')
  

const routers = router
  .get('/getHandCount',HandApi.getCount)
  .post('/changeHandCount',HandApi.changeCount)
module.exports = routers