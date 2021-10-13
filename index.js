require('dotenv').config()
const express = require('express'),
  app = express(),
  PORT = process.env.PORT || 8000,
  cors = require('cors')
  
require('./server/database/connection')

if (process.env.NODE_ENV === "production") {
  const path = require('path')
  app.use(express.static(path.resolve(__dirname, "build")))
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"))
  })
}

app.use(cors())
app.use(express.json())
const routes = require('./server/routes/routes')
app.use('/api', routes)

app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`))
