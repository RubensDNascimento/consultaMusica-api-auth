const services = require('./services')
const Boom = require('boom')
const Validator = require('fastest-validator')

const v = new Validator()

module.exports = {
    search: async ctx =>{
        const { request: { body }, response } = ctx
        const song = await services.search(body)

        const schema = {
            songName: { max: 60, min: 1, type: "string" },
            artist: { max: 60, min: 1, type: "string" },
        }
        
        const errors = v.validate(body, schema)
        if (Array.isArray(errors) && errors.length) {
            response.status = 400
            return response.body = Boom.badRequest(null, errors)
        }

        if(song){
            response.body = song
        } else {
            response.status = 401
            response.body = {result: Boom.badRequest()}
        }
    }
}