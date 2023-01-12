
const fs = require('fs')
const path = require('path')
const { v4 } = require('uuid')

const express = require('express')
const app = express()

app.use(express.static('src'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())


app.get('/', (req, res) => {
  const htmlFilePath = path.join(__dirname, 'docs', 'index.html')
  res.sendFile(htmlFilePath)
})

app.get('/makecharacter', (req, res) => {
  const htmlFilePath = path.join(__dirname, 'docs', 'makeCharacter.html')
  res.sendFile(htmlFilePath)
})


app.post('/makecharacter', (req, res) => {
  const newCharacterItems = req.body
  newCharacterItems.id = v4()
  
  const fileDataPath = path.join(__dirname, 'data', 'characters.json')
  const fileData = fs.readFileSync(fileDataPath)

  const storedCharacters = JSON.parse(fileData)
  storedCharacters.push(newCharacterItems)

  fs.writeFileSync(fileDataPath, JSON.stringify(storedCharacters))
  res.json()
})



app.get('/mycharacters', (req, res) => {
  const htmlFilePath = path.join(__dirname, 'docs', 'myCharacters.html')
  res.sendFile(htmlFilePath)
})

app.listen(3000)