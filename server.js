const express = require('express')
const path = require('path')
require('dotenv').config()

const PORT = process.env.PORT || 5000

const app = express()

const posts = [
	{
		id: 123456,
		title: 'Title',
		text: 'Text Text Text Text Text Text Text Text Text Text Text Text ',
		author: 'Author',
		date: new Date()
	},
	{
		id: 123456,
		title: 'Title',
		text: 'Text Text Text Text Text Text Text Text Text Text Text Text ',
		author: 'Author',
		date: new Date()
	},
	{
		id: 123456,
		title: 'Title',
		text: 'Text Text Text Text Text Text Text Text Text Text Text Text ',
		author: 'Author',
		date: new Date()
	}
]

app.use(
	express.static('styles', {
		dotfiles: 'deny',
		etag: false,
		extensions: ['css'],
		index: false,
		redirect: false
	})
)

app.listen(PORT, error => {
	error ? console.error(error) : console.log(`Server starts on ${PORT} port`)
})

app.get('/', (req, res) => {
	const title = 'Home'
	res.render(path.resolve(__dirname, 'views', 'posts.ejs'), { title, posts })
})
