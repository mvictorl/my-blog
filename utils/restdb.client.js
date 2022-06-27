require('dotenv').config()
const https = require('https')
const axios = require('axios')

const db = axios.create({
	baseURL: 'https://myblog-66b5.restdb.io/rest',
	headers: {
		'Content-Type': 'application/json',
		'x-api-key': '62b30c56a42e7520259e3afa', // process.env.RESTDB_KEY,
		'Cache-Control': 'no-cache'
	},
	httpsAgent: new https.Agent({
		rejectUnauthorized: false
	})
})

module.exports = db
