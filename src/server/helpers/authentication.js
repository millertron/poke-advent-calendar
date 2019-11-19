const db = require('../helpers/db')

module.exports.validateUrlKey = async (queryKey) => {
    const database = db.get()
    let urlKey = await database.collection('urlKeys').findOne({ key: queryKey, active: true })
    return urlKey !== null
}

