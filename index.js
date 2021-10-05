const config = require('./config.json')
const express = require('express'),
  app = express(),
  PORT = process.env.SERVER_PORT || config.SERVER_PORT,
  cors = require('cors')
  
app.get('/', (req, res) => {
  res.send(`🚀 Up and Running`)
})

require('./server/database/connection')

app.use(cors())
app.use(express.json())
const routes = require('./server/routes/routes')
app.use('/api', routes)

app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`))
