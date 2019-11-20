const db = require('../helpers/database')

module.exports.validateUrlKey = async (queryKey) => {
    const database = db.get()
    return await database.collection('urlKeys').findOne({ key: queryKey, active: true })
}

