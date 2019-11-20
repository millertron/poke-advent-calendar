const express = require('express')
const cors = require('cors')
const db = require('./helpers/database')
const pocketRoutes = require('./routes/pockets')

const app = express()

app.get('/', (req, res) => res.send("Foo!"))

app.use(cors())
app.use(express.json())
app.use('/pockets', pocketRoutes)

db.connect((err, client) => {
    app.listen(3000, ()=>(console.log("Poke Express Running on Port 3000!")));
})




