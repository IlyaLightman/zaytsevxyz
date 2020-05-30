const { Router } = require('express')
const { hash, compare } = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const { validationResult } = require('express-validator')
const { registerValidators, loginValidators } = require('../utils/validators')

const router = Router()

// /api/auth/register
router.post('/register', registerValidators,
	async (req, res) => {
		try {
			const errors = validationResult(req)

			if (!errors.isEmpty()) {
				return res.status(400).json({
					errors: errors.array(),
					message: 'Incorrect registration data'
				})
			}

			const { email, password, nickname } = req.body

			const candidateByEmail = await User.findOne({ email })
			if (candidateByEmail) {
				return res.status(400).json({
					errors: [{ msg: 'Пользователь с такой почтой уже существует' }],
					message: 'Пользователь с такой почтой уже существует'
				})
			}

			const candidateByNickname = await User.findOne({ nickname })
			if (candidateByNickname) {
				return res.status(400).json({
					errors: [{ msg: 'Пользователь с таким именем уже существует' }],
					message: 'Пользователь с таким именем уже существует'
				})
			}

			const hashedPassword = await hash(password, 12)
			const user = new User({ email, password: hashedPassword, nickname })

			user.save()

			res.status(201).json({ message: 'The user was created successfully' })
		} catch (err) {
			res.status(500).json({ message: 'Something wrong' })
		}
	}
)

// /api/auth/login
router.post('/login', loginValidators,
	async (req, res) => {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				return res.status(400).json({
					errors: errors.array(),
					message: 'Incorrect registration data'
				})
			}

			const { email, password } = req.body

			const user = await User.findOne({ email })
			if (!user) {
				return res.status(400).json({ message: 'There is no such user' })
			}

			const isMatch = await compare(password, user.password)
			if (!isMatch) {
				return res.status(400).json({
					errors: [{
						msg: 'Неверный пароль' }],
					message: 'Неверный пароль'
				})
			}

			const token = jwt.sign(
				{ userId: user.id },
				config.get('jwtSecret'),
				{ expiresIn: '1h' }
			)

			const userData = {
				nickname: user.nickname,
				isAdmin: user.isAdmin
			}

			res.json({ token, userId: user.id, userData })
		} catch (err) {
			res.status(500).json({ message: 'Something wrong' })
		}
	}
)

module.exports = router