module.exports = {
    getPocketsForKey: async (db, key) => {
        return await db.collection('pockets').find({ key: key }).toArray()
    }
}
