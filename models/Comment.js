const { Schema, model } = require('mongoose')

const schema = new Schema({
	content: {
		type: String,
		require: true
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
})

module.exports = model('Comment', schema)