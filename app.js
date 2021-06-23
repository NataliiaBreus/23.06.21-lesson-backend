const express = require('express')
const app = express()

const PORT = 3000

app.get('/', (req, res) =>{
  res.send ('Hello world!')
})
app.get('*', (req, res) =>{
  res.send('ERROR 404')
})

app.listen (PORT, () => {
  console.log('Server is running on ${PORT} port')
})
