const express = require("express")
const authentication = require('../helpers/authentication')
const pocketRepository = require('../repositories/pockets')

const router = express.Router({})

const fetchPocketsForUrlKey = async (urlKey, res) => {
    const authenticated = await authentication.validateUrlKey(urlKey)
    if (!authenticated) {
        res.status(401).send("Invalid URL Key!")
    } else {
        const pockets = await pocketRepository.getPocketsForKey(urlKey)
        res.status(200).json(pockets)
    }
}

router.get('/:key', (req, res) => {
    const key = req.params.key;
    fetchPocketsForUrlKey(key, res);
})

module.exports = router;
