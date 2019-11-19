const express = require('express')
const path = require('path')
const MongoClient = require('mongodb')
const authentication = require('./helpers/authentication')
const pocketRepository = require('./repositories/pocketRepository')

const app = express()

const databaseUrl = 'localhost:27017'
const databaseName = 'myTestDB'

app.set('views', path.join(__dirname, 'views'))
app.get('/', (req, res) => res.send("Foo!"))

const fetchPocketsForUrlKey = async (db, urlKey, res) => {
    const authenticated = await authentication.validateUrlKey(db, urlKey)
    console.log("Authentication status:", authenticated)
    if (!authenticated) {
        res.status(401).send("Invalid URL Key!")
    } else {
        const pockets = await pocketRepository.getPocketsForKey(db, urlKey)
        console.log(pockets)
        res.status(200).json(pockets)
    }
}

MongoClient.connect(`mongodb://${databaseUrl}`, (err, client) => {
    const db = client.db(databaseName);
    app.get('/pockets/:key', (req, res) => {
        const key = req.params.key;
        fetchPocketsForUrlKey(db, key, res);
    })
    app.listen(3000, ()=>(console.log("Poke Express Running on Port 3000!")));
})


