const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req, res, next) => {
	if (req.method === 'OPTIONS') {
		return next()
	}

	try {
		console.log('tototoken')
		console.log(req.headers)
		const token = req.headers.authorization.split(' ')[1] // "Bearer TOKEN"
		console.log('token', token)

		if (!token) {
			res.status(401).json({ message: 'Не авторизирован... совсем' })
		}

		const decoded = jwt.verify(token, config.get('jwtSecret'))
		req.user = decoded
		next()
	} catch (err) {
		res.status(401).json({ message: 'Не авторизирован', err })
	}
}