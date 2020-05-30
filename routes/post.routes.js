const { Router } = require('express')
const Post = require('../models/Post')
const auth = require('../middleware/auth.middleware')

const router = Router()
const errorMessage = 'Что-то пошло не так.... попробуйте снова'

router.post('/create', auth, async (req,res) => {
	try {
		const {
			title, cover, content, user, date, tags
		} = req.body

		if (!user.isAdmin) {
			res.status(500).json({
				message: 'У вас нет прав'
			})
		}

		const author = {
			name: user.nickname,
			userId: user._id
		}
		const post = new Post(
			title, cover, content, author, date, tags
		)

		await post.save()

		res.status(201).json({
			message: title
		})
	} catch (err) {
		res.status(500).json({
			message: errorMessage
		})
	}
})

router.get('/', async (req, res) => {
	try {
		console.log('req', req)
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