const path = require('path');
const Koa = require('koa');
const app = new Koa();
const routers = require('./routers/index');
const views = require('koa-views');
const koaStatic = require('koa-static')




// 配置静态资源加载中间件
app.use(koaStatic(
  path.join(__dirname , './../lib')
))

// 配置服务端模板渲染引擎中间件
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))

// 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods())

app.listen(30001)
console.log('server is starting at port 30001')