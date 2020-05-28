const { body } = require('express-validator')
const User = require('../models/User')

exports.registerValidators = [
	body('email', 'Неправильная почта или пользователь уже существует')
		.isEmail()
		.custom(async (value, { req }) => {
			try {
				const user = await User.findOne({ email: value })
				if (user) {
					return Promise.reject('Пользователь с такой почтой уже есть')
				}
				return true
			} catch (err) {
				console.log(err)
			}
		}),
	body('password', 'В пароле должно быть минмиум 6 символов')
		.isLength({ min: 6, max: 26 })
		.isAlphanumeric()
		.trim(),
	body('nickname', 'В имени должно быть минимум 2 символа')
		.isLength({ min: 2, max: 16 })
		.isAlphanumeric(),
	body('confirm', `Пароли не совпадают`)
		.custom((value, { req }) => {
			if (value !== req.body.password) {
				throw new Error(`Пароли не совпадают`)
			}
			return true
		})
		.trim()
]

exports.loginValidators = [
	body('email', 'Неверная почта')
		.isEmail()
		.custom(async (value, { req }) => {
			try {
				const user = await User.findOne({ email: value })
				if (!user) {
					return Promise.reject('Нет пользователя с такой почтой')
				}
			} catch (err) {
				console.log(err)
			}
		})
		.normalizeEmail(),
	body('password', 'Неверный пароль')
		.isLength({ min: 6, max: 26 })
		.isAlphanumeric()
		.trim()
]
