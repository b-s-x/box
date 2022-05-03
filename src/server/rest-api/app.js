const express = require("express")
const path = require("path")
const {v4} = require("uuid")

const app = express()
const port = "8000"

let CONTACTS = [
  {id: v4(), name: "bsx", value: 99999999999, marked: false },
]

app.use(express.json())

app.get("/api/contacts", (req, res) => {
  res.status(200).json(CONTACTS)
})

app.post("/api/contacts", (req, res) => {
  const contact = {...req.body, id: v4(), marked: false }
  CONTACTS.push(contact)
  res.status(201).json(contact)
})

app.delete("/api/contacts/:id", (req, res) => {
  CONTACTS = CONTACTS.filter((item) => item.id !== req.params.id)
  res.status(200).json({message: "contact was removed"})
})

app.put("/api/contacts/:id", (req, res) => {
  const index = CONTACTS.findIndex((item) => item.id === req.params.id)
  CONTACTS[index] = req.body
  res.json(CONTACTS[index])
})


app.use(express.static(path.resolve(__dirname, "client")))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "index.html" ))
})

app.listen(port, () => {
  console.log(`Server working on http://localhost:${port}`)
})