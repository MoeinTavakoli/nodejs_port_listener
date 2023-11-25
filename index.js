// express modules
const express = require('express')
const app = express()

// ip modules
const {address} = require("ip");
const serverIP = address()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://${serverIP}:${port}`)
})
