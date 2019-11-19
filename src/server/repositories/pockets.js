module.exports = {

    getPocketsForKey: (db, key) => {
        return db.collection('pockets').find({ key: key }).toArray()
    },

    insertPocket: async (db, key, dayNum, pokeId) => {
        const existing = await db.collection('pockets').find({ key: key, dayNum: dayNum }).toArray()
        if (existing.length == 0) {
            db.collection('pockets').insertOne({ key: key, dayNum: dayNum, pokeId: pokeId })
        }
    },

    updatePocket: (db, key, dayNum, pokeId) => {
        db.collection('pockets').updateOne(
            { key: key, dayNum: dayNum, pokeId: null },
            { $set: { key: key, dayNum: dayNum, pokeId: pokeId }}
        )
    }
}
