const validateUrlKey = async (db, queryKey, res) => {
    let urlKey = await db.collection('urlKeys').findOne({ key: queryKey, active: true })

    if (urlKey == null) {
        res.status(401).send("Invalid URL Key!")
    } else {
        res.status(200).send(`Hello, ${urlKey.user}`)
    }
}

module.exports.validateUrlKey = validateUrlKey;
    

