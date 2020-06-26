const forceSSL = require('express-force-ssl')
const mongoose = require('mongoose')
const express = require('express')
const config = require('config')
const https = require('https')
const http = require('http')
const path = require('path')
const fs = require('fs')

const app = express()

app.use(express.json({ extended: true }))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/post', require('./routes/post.routes'))
app.use('/api/comment', require('./routes/comment.routes'))

app.use('/api/test', require('./routes/test.routes'))

if (process.env.NODE_ENV === 'production') {
	app.use(forceSSL)

	app.use('/', express.static(path.join(__dirname, 'client', 'build')))

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

const httpsOptions = {
	key: fs.readFileSync(path.resolve(
		__dirname, 'ssl', 'server.key'), 'utf-8'),
	cert: fs.readFileSync(path.resolve(
		__dirname, 'ssl', 'certificate.crt'), 'utf-8'),
	ca: fs.readFileSync(path.resolve(
		__dirname, 'ssl', 'certificate_ca.crt'), 'utf-8')
}

const PORT = config.get('PORT')

async function start() {
	try {
		await mongoose.connect(config.get('MONGO_URI'), {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true
		})

		http.createServer(app).listen(80, () => {
			console.log(`[HTTP] App has been started on port 80... `)
		})

		if (process.env.NODE_ENV === 'production') {
			https.createServer(httpsOptions, app).listen(PORT, () => {
				console.log(`[HTTPS] App has been started on port ${PORT}... `)
			})
		}
	} catch (err) {
		console.log('Server Error', err.message)
		process.exit(1)
	}
}

start()
	.then(() => console.log('Success'))
