const express = require('express')
const cors = require('cors')
const db = require('./helpers/database')
const pocketRoutes = require('./routes/pockets')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send("Foo!"))

app.use(cors())
app.use(express.json())
app.use('/pockets', pocketRoutes)

db.connect((err, client) => {

    if (process.env.NODE_ENV === `production`) {
        app.use(express.static(path.resolve(__dirname, `../../dist`)))
        app.get('/*', (req, res) => { res.sendFile(path.resolve('index.html'))})
    }

    app.listen(port, ()=>(console.log(`Poke Express Running on Port ${port}!`)));
})




