const authroute             = require('./route/authentication.route')
const fiscaliaMgt           = require('./route/fiscalia.route')

module.exports = (app) => {
    app.use('/api/fiscalia', fiscaliaMgt)
}