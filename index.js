const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

  res.send('Template server for NodeJS is online but has some new attributes')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
