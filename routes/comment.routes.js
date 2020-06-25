const { Router } = require('express')
const Comment = require('../models/Comment')
const User = require('../models/User')
const Post = require('../models/Post')
const auth = require('../middleware/auth.middleware')

const router = Router()

router.post('/create', auth, async (req, res) => {
	try {
		const { postId, comment } = req.body
		const { user } = req

		const currentUser = User.findOne({ _id: user.userId })

		const newComment = new Comment({
			content: comment, author: {
				name: currentUser.nickname,
				userId: user.userId
			}
		})

		const post = Post.findOne({ _id: postId })

		post.comments.push(newComment)

		res.status(201)
	} catch (err) {
		res.status(500).json({
			message: err
		})
	}
})