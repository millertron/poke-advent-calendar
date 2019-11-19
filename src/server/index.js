const express = require('express')
const path = require('path')
const MongoClient = require('mongodb')
const authentication = require('./helpers/authentication')

const app = express()

const databaseUrl = 'localhost:27017'
const databaseName = 'myTestDB'

app.set('views', path.join(__dirname, 'views'))
app.get('/', (req, res) => res.send("Foo!"))

MongoClient.connect(`mongodb://${databaseUrl}`, (err, client) => {
    const db = client.db(databaseName);
    app.get('/pockets/:key', (req, res) => {
        const key = req.params.key;
        authentication.validateUrlKey(db, key, res)
    })
    app.listen(3000, ()=>(console.log("Poke Express Running on Port 3000!")));
})


