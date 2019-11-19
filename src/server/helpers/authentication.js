module.exports.validateUrlKey = async (db, queryKey) => {
    let urlKey = await db.collection('urlKeys').findOne({ key: queryKey, active: true })
    return urlKey !== null
}

