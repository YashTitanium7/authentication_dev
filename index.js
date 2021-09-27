require('dotenv').config()
const express = require('express'),
  app = express(),
  PORT = process.env.SERVER_PORT

app.get('/', (req, res) => {
  res.send(`🚀 Up and Running`)
})

const routes = require('./controller/routes')
app.use('/api', routes)

app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`))
