const { Router } = require('express')
const Post = require('../models/Post')
const User = require('../models/User')
const auth = require('../middleware/auth.middleware')

const router = Router()
const errorMessage = 'Что-то пошло не так.... попробуйте снова'

router.post('/create', auth, async (req,res) => {
	try {
		const {
			title, cover, content, author, date, tags
		} = req.body

		const user = await User.findOne({ _id: author.userId })

		if (!user.isAdmin) {
			res.status(500).json({
				message: 'У вас нет прав'
			})
		}
		author.name = user.nickname

		const post = new Post({
			title, cover, content, author, date, tags
		})

		await post.save()

		res.status(201).json({
			message: title
		})
	} catch (err) {
		res.status(500).json({
			message: errorMessage, err
		})
	}
})

router.get('/', async (req, res) => {
	try {
		// console.log('req', req)
		const posts = await Post.find()

		res.json(posts)
	} catch (err) {
		res.status(500).json({
			message: errorMessage
		})
	}
})

router.get('/:id', async (req, res) => {
	try {
		const post = await Post.findById(req.params.id)

		res.json(post)
	} catch (err) {
		res.status(500).json({
			message: errorMessage
		})
	}
})

module.exports = router