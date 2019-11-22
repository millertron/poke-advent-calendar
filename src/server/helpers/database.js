const MongoClient = require('mongodb')

const databaseUrl = process.env.MONGODB_URI || 'localhost:27017'
const databaseName = process.env.MONGODB_DB || 'myTestDB'
const databaseUser = process.env.MONGODB_USERNAME
const databasePassword = process.env.MONGODB_PASSWORD
const authentication = (databaseUser && databasePassword) ? `${databaseUser}:${databasePassword}@` : ""

var state = {
    db: null
}

const connect = (done) => {
    if (state.db) {
        return done()
    }

    MongoClient.connect(`mongodb://${authentication}${databaseUrl}/${databaseName}`, (err, client) => {
        if (err) {
            console.log("Error connecting to MongoDB", err)
            return done(err)
        }
        state.db = client.db(databaseName)
        console.log("Successfully connected to MongoDB")
        done()
    })
}

const get = () => state.db

const close = (done) => {
    if (state.db) {
        state.db.close( (err, result) => {
            state.db = null
            state.mode = null
            done(err)
        })
    }
}

module.exports = {connect, get, close}
