const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('get')
})

app.post('/', (req, res) => {
  res.send('post')
})

app.delete('/', (req, res) => {
  res.send('delete')
})

app.patch('/', (req, res) => {
  res.send('patch')
})

app.listen(port, () => {})