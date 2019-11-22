const MongoClient = require('mongodb')

const databaseUrl = process.env.MONGODB_URI || 'localhost:27017'
const databaseName = 'myTestDB'

var state = {
    db: null
}

const connect = (done) => {
    if (state.db) {
        return done()
    }

    MongoClient.connect(`mongodb://${databaseUrl}`, { useUnifiedTopology: true }, (err, client) => {
        if (err) {
            console.log("Error connecting to MongoDB")
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

export {connect, get, close}
