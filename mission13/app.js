const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.get("/html", (req, res) => {
  res.sendFile(__dirname+"/index.html")
})

app.listen(port, () => {})