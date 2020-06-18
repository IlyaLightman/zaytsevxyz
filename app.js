const mongoose = require('mongoose')
const express = require('express')
const config = require('config')
const path = require('path')

const app = express()

app.use(express.json({ extended: true }))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/post', require('./routes/post.routes'))

app.use('/api/test', require('./routes/test.routes'))

if (process.env.NODE_ENV === 'production') {
	app.use('/', express.static(path.join(__dirname, 'client', 'build')))

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

const PORT = config.get('PORT')

async function start() {
	try {
		await mongoose.connect(config.get('MONGO_URI'), {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true
		})

		app.listen(PORT, () => console.log(`App has been started on port ${PORT}... `))
	} catch (err) {
		console.log('Server Error', err.message)
		process.exit(1)
	}
}

start()
	.then(() => console.log('Success'))
