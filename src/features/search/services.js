
const db = require('../../_db/models/')
module.exports = {
    search: payload => db.Song.findOne({ where: payload })
    }
