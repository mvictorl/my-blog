const express = require('express')
const morgan = require('morgan')
const postRoutes = require('./routes/post-routes')
const contactRoutes = require('./routes/contact-routes')
const createPath = require('./utils/create-path')
require('dotenv').config()

const PORT = process.env.PORT || 5000
const DbUrl = process.env.DBURL || 'mongodb://127.0.0.1:27017/local-my-blog'

const app = express()

const serverStart = () => {
	app.listen(PORT, error => {
		error ? console.error(error) : console.log(`Server starts on ${PORT} port`)
	})
}

serverStart()

// Middleware ==============

app.use(morgan(':method :url :status :response-time ms'))
// app.use((req, res, next) => {
// 	console.log(`Path: ${req.path} - Method: ${req.method}`)
// 	next()
// })
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/styles'))
app.use(express.static(__dirname + '/dist'))
// app.use(
// 	express.static('styles', {
// 		dotfiles: 'deny',
// 		etag: false,
// 		extensions: ['css'],
// 		index: false,
// 		redirect: false
// 	})
// )
// =========================

app.use(postRoutes)
app.use(contactRoutes)

app.get('/', (req, res) => {
	const title = 'Home'
	res.render(createPath('index'), { title })
})

// Last middleware - error handler
app.use((req, res) => {
	const title = 'Error Page'
	res.status(404).render(createPath('error'), { title })
})
