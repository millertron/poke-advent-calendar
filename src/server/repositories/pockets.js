const db = require('../helpers/db')

module.exports = {

    getPocketsForKey: (key) => {
        return db.get().collection('pockets').find({ key: key }).toArray()
    },

    insertPocket: async (key, dayNum, pokeId) => {
        const database = db.get()
        const existing = await database.collection('pockets').find({ key: key, dayNum: dayNum }).toArray()
        if (existing.length == 0) {
            database.collection('pockets').insertOne({ key: key, dayNum: dayNum, pokeId: pokeId })
        }
    },

    updatePocket: (key, dayNum, pokeId) => {
        db.get().collection('pockets').updateOne(
            { key: key, dayNum: dayNum, pokeId: null },
            { $set: { key: key, dayNum: dayNum, pokeId: pokeId }}
        )
    }
}