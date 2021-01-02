const express = require("express")
const path = require("path")
const bodyParser = require("body-parser");

const app = express()
const port = "8000"

const contact = {
  number: 1,
  string: "2",
}

app.use(express.static(path.resolve(__dirname, "client")))
app.use(bodyParser.json())

app.get("/ok", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "index.html"))
  let data = JSON.stringify(contact)
  res.json(data)
})

app.post('/ok', (req, res) => {
  console.log(req.body);
  res.send("ok")
})

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
})