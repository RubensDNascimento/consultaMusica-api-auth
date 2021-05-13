const authRoutes = require('../features/auth/routes')
const userRoutes = require('../features/user/routes')
const searchRoutes = require('../features/search/routes')
const postRoutes = require('../features/post/routes')

module.exports = router => {
    authRoutes(router)
    userRoutes(router)
    searchRoutes(router)
    postRoutes(router)
}