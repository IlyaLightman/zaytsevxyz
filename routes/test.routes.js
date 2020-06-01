// It's only for the tests

const { Router } = require('express')
const auth = require('../middleware/auth.middleware')

const router = Router()

router.post('/data', auth, (req, res) => {
	res.json({ message: 'Всё ок' })
})

module.exports = router