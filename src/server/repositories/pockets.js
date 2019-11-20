const db = require('../helpers/database')

module.exports = {

    getPocketsForKey: (key) => {
        return db.get().collection('pockets').find({ urlKey: key }).toArray()
    },

    insertPocket: async (key, dayNum, pokeId) => {
        const database = db.get()
        const existing = await database.collection('pockets').find({ urlKey: key, dayNum: dayNum }).toArray()
        if (existing.length == 0) {
            await database.collection('pockets').insertOne({ urlKey: key, dayNum: dayNum, pokeId: pokeId })
        }
    },

    updatePocket: (key, dayNum, pokeId, success) => {
        db.get().collection('pockets').updateOne(
            { urlKey: key, dayNum: dayNum, pokeId: null },
            { $set: { urlKey: key, dayNum: dayNum, pokeId: pokeId }}
        ).then(success)
    }
}
