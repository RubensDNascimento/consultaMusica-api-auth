const Boom = require('boom')
const Validator = require('fastest-validator')
const services = require('./services')
const fs = require("fs");
const v = new Validator()

module.exports = {
    create: async ctx => {
        const { request: { body }, response } = ctx
        console.log("Antes de Criar"+body)

        const schema = {
            songName: { max: 60, min: 1, type: "string" },
            artist: { max: 60, min: 1, type: "string" },
            album: { max: 60, min: 1, type: "string" },
            year: { positive: true ,interger: true, type: "number" },
            lyrics: { min: 1, type: "string" },
            Translation: { type: "string" },
            picture: { type: "any" }
        }

        const errors = v.validate(body, schema)
        if (Array.isArray(errors) && errors.length) {
            response.status = 400
            return response.body = Boom.badRequest(null, errors)
        }

        const song = await services.create(body)
        console.log("Depois de Criar"+body)
        response.body = song
    }
}