import express from 'express'
import path from 'path'

const app = express()

app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => res.send("Foo!"))

app.listen(3000, ()=>(console.log("Poke Express Running on Port 3000!")));
