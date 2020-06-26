const { Router } = require('express')
const Comment = require('../models/Comment')
const User = require('../models/User')
const Post = require('../models/Post')
const auth = require('../middleware/auth.middleware')

const router = Router()

router.post('/create', auth, async (req, res) => {
	try {
		const { comment, postId } = req.body
		const { user } = req

		const currentUser = await User.findOne({ _id: user.userId })

		const newComment = new Comment({
			content: comment, author: {
				name: currentUser.nickname,
				userId: user.userId
			}
		})

		console.log('postId', postId, 'comment', comment)

		const post = await Post.findOne({ _id: postId })

		console.log(newComment)

		post.comments.push(newComment)

		console.log(post.comments)

		await post.save()

		res.status(201).json(newComment)
	} catch (err) {
		res.status(500).json({
			message: err
		})
	}
})

module.exports = router