import express from 'express'
import path from 'path'
import { MongoClient } from 'mongodb'

const app = express()

const databaseUrl = 'localhost:27017'
const databaseName = 'myTestDB'

app.set('views', path.join(__dirname, 'views'))
app.get('/', (req, res) => res.send("Foo!"))

const validateUrlKey = async (db, queryKey, res) => {
    let urlKey = await db.collection('urlKeys').findOne({ key: queryKey, active: true })

    if (urlKey == null) {
        res.status(401).send("Invalid URL Key!")
    } else {
        res.status(200).send(`Hello, ${urlKey.user}`)
    }
}

MongoClient.connect('mongodb://' + databaseUrl, (err, client) => {
    const db = client.db(databaseName);
    app.get('/pockets/:key', (req, res) => {
        const key = req.params.key;
        validateUrlKey(db, key, res)
    })
    app.listen(3000, ()=>(console.log("Poke Express Running on Port 3000!")));
})


