const express = require("express")
const authentication = require('../helpers/authentication')
const pocketRepository = require('../repositories/pockets')

const router = express.Router({})

const fetchPocketsForUrlKey = async (urlKey, res) => {
    const authenticatedKey = await authentication.validateUrlKey(urlKey)
    if (!authenticatedKey) {
        res.status(401).json({ message: "Invalid URL Key!" })
    } else {
        const pockets = await pocketRepository.getPocketsForKey(urlKey)
        res.status(200).json({ user:authenticatedKey.user, pockets:pockets })
    }
}

router.get('/:key', (req, res) => {
    const key = req.params.key;
    fetchPocketsForUrlKey(key, res);
})

const isPastNthDayOfMonth = (n) => {
    const monthToCheck = 12
    const yearToCheck = 2019
    const today = new Date()

    return today.getFullYear() === yearToCheck 
        && (today.getMonth() + 1) === monthToCheck // +1 as getMonth() is zero-indexed 
        && n <= today.getDate()
}

const isValidDayNum = (n) => {
    return (n > 0 && n <= 25 && isPastNthDayOfMonth(n))
}

const generateNewRandomPokeId = (excludedValues) => {
    let pokeId = null
    while(pokeId == null || excludedValues.includes(pokeId)) {
        pokeId = Math.floor(Math.random() * 151) + 1
    }
    return pokeId
}

const createPocket = async (urlKey, dayNum, res) => {
    if (isValidDayNum(dayNum)) {
        const existingPockets = await pocketRepository.getPocketsForKey(urlKey)
        const existingPokeIds = existingPockets.map((pocket) => pocket.pokeId)
        const pokeId = generateNewRandomPokeId(existingPokeIds)
        await pocketRepository.insertPocket(urlKey, dayNum, pokeId)
        console.log("Successful pocket insert!")
        res.status(200).send({urlKey: urlKey, dayNum: dayNum, pokeId: pokeId})
    } else {
        res.status(400).send({ message: "Pocket not available" })
    }
}

router.post('/create', (req, res) => {
    const {key, dayNum} = req.body
    createPocket(key, dayNum, res)
})

module.exports = router;
