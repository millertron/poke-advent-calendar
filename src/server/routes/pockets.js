const express = require("express")
const authentication = require('../helpers/authentication')
const pocketRepository = require('../repositories/pockets')

const router = express.Router({})

const fetchPocketsForUrlKey = async (urlKey, res) => {
    const authenticated = await authentication.validateUrlKey(urlKey)
    if (!authenticated) {
        res.status(401).json({ message: "Invalid URL Key!" })
    } else {
        const pockets = await pocketRepository.getPocketsForKey(urlKey)
        res.status(200).json(pockets)
    }
}

router.get('/:key', (req, res) => {
    const key = req.params.key;
    fetchPocketsForUrlKey(key, res);
})

const isPastNthDayOfMonth = (n) => {
    const monthToCheck = 11
    const yearToCheck = 2019
    const today = new Date()

    return today.getFullYear() === yearToCheck 
        && (today.getMonth() + 1) === monthToCheck // +1 as getMonth() is zero-indexed 
        && n <= today.getDate()
}

const createPocket = async (urlKey, dayNum, pokeId, res) => {
    if (isPastNthDayOfMonth(dayNum)) {
        await pocketRepository.insertPocket(urlKey, dayNum, pokeId)
        console.log("Successful pocket insert!")
        res.status(200).send({key: urlKey, dayNum: dayNum, pokeId: pokeId})
    } else {
        res.status(400).send({ message: "Pocket not available" })
    }
}

router.post('/create', (req, res) => {
    const {key, dayNum, pokeId} = req.body
    createPocket(key, dayNum, pokeId, res)
})

const updatePocket = async (urlKey, dayNum, pokeId, res) => {
    if (isPastNthDayOfMonth(dayNum)) {
        pocketRepository.updatePocket(urlKey, dayNum, pokeId, ()=> {
            console.log("Successful pocket update!")
            res.status(200).send({key: urlKey, dayNum: dayNum, pokeId: pokeId})
        })
    } else {
        res.status(400).send({ message: "Pocket not available" })
    }
}

router.post('/update', (req, res) => {
    const {key, dayNum, pokeId} = req.body
    updatePocket(key, dayNum, pokeId, res)
})

module.exports = router;
