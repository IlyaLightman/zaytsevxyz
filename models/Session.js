const { Schema, model } = require('mongoose')

const schema = new Schema({
	token: {
		type: String,
		required: true,
		unique: true
	},
	userId: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	},
	expire_at: {
		type: Date,
		default: Date.now,
		expires: 3600
	}
})

module.exports = model('Session', schema)