const express = require('express')
const db = require('./helpers/db')
const pocketRoutes = require('./routes/pockets')

const app = express()

app.get('/', (req, res) => res.send("Foo!"))

app.use('/pockets', pocketRoutes)

db.connect((err, client) => {
    app.listen(3000, ()=>(console.log("Poke Express Running on Port 3000!")));
})




