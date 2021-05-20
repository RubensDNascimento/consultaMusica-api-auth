const Koa = require('koa')
const Router = require('koa-router')
const applyRoutes = require('./routes')
const bodyParser = require('koa-bodyparser')
const koaStatic = require('koa-static')
const cors = require('@koa/cors')
const path = require('path');

const app = new Koa()
const router = new Router()

const cacheredis = require('koa-redis-cache')
const cacheOptions = {
    routes: [{
        
    path: '/v1/api/search',
    }]
}

module.exports = () => {

    console.log('[Koa] Creating a new server')


    applyRoutes(router)

    app.use(cors())
    /*app.use(require('koa-body')({
        formidable:{
            uploadDir: '../uploads', // directory where files will be uploaded
            keepExtensions: true // keep file extension on upload
        },
        multipart: true,
        urlencoded: true
    }))*/
    app.use(bodyParser({})).use(koaStatic(
        path.join(__dirname,"../uploads"))).use(router.routes()).use(cacheredis(cacheOptions)).use(router.allowedMethods());

    app.listen(process.env.PORT || 8080)
}