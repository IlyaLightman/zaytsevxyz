const { Schema, model } = require('mongoose')

const schema = new Schema({
	title: {
		type: String,
		required: true,
		unique: true
	},
	cover: {
		type: String,
		unique: true
	},
	content: {
		type: String,
		required: true
	},
	preview: {
		type: String,
		required: true
	},
	author: {
		name: String,
		userId: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true
		}
	},
	date: {
		type: Date,
		default: Date.now
	},
	tags: [
		{
			tag: String
		}
	],
	comments: [
		{
			type: Schema.Types.Object,
			ref: 'Comment'
		}
	]
})

module.exports = model('Post', schema)