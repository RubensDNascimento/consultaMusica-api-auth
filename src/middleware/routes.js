const upload = require('./uploads')
module.exports = router => {
    router.post('/v1/api/uploads', upload.single('image'), async ctx => {
        console.log('ctx.request.file', ctx.request.file);
        console.log('ctx.file', ctx.file);
        console.log('ctx.request.body', ctx.request.body);
        console.log('ctx', ctx);
        const { path, name, type } = ctx.request.file
        console.log(`path: ${path}`)
        console.log(`filename: ${name}`)
        console.log(`type: ${type}`)
        ctx.body = path



    }
    );
}
