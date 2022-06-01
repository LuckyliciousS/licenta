const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('This server will be used by the GCE department')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
