const router = require('koa-router')()
const routers = router
    .get('/index', async (ctx) => {
        const title = 'home';
        await ctx.render('index', {
            title
        })
    })

module.exports = routers