import express from 'express' 
import path from 'path'
import { fileURLToPath } from 'url'
import { PORT } from './config.js'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname)))

app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})