const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT || 5000

const app = express()

app.use(
	express.static('styles', {
		dotfiles: 'deny',
		etag: false,
		extensions: ['css'],
		index: false,
		redirect: false
	})
)

app.listen(PORT, () => {
	console.log(`Server starts on ${PORT} port`)
})
