const express = require('express')
const app = express()
const { root, getUser } = require('./api')

app.use(express.json({ limit: '5mb' }))
app.get('/', root)
app.get('/user', getUser)

module.exports = ({ port, cb }) => {
  return app.listen(port, cb)
}
