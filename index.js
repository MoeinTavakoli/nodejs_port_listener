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

app.use('*' , (req,res)=>{
  res.status(404).send('not found !!!');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://${serverIP}:${port}`)
})
