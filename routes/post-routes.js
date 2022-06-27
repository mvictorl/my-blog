const express = require('express')
const route = express.Router()
const createPath = require('../utils/create-path')

const {
	getAllPosts,
	getPostById,
	deletePostById,
	getAddPostPage,
	postAddPost
} = require('../controllers/post-controller')

const db = require('../utils/restdb.client')

route.get('/posts', getAllPosts)

route.delete('/posts/:id', deletePostById)

route.get('/post/:id', getPostById)

route.get('/add-post', getAddPostPage)

route.post('/add-post', postAddPost)

module.exports = route

// ========================================================
// const posts = await axios.get('https://myblog-66b5.restdb.io/rest/posts', {
// 	headers: {
// 		'Content-Type': 'application/json',
// 		'x-apikey': '62b30c56a42e7520259e3afa', // process.env.RESTDB_KEY,
// 		'cache-control': 'no-cache'
// 	},
// 	httpsAgent: new https.Agent({
// 		rejectUnauthorized: false
// 	})
// })

// res.render(path.resolve(__dirname, 'views', 'posts.ejs'), {
// 	title,
// 	posts: posts.data
// })
// ========================================================
// axios
// 	.get('https://myblog-66b5.restdb.io/rest/posts', {
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'x-apikey': '62b30c56a42e7520259e3afa', // process.env.RESTDB_KEY,
// 			'cache-control': 'no-cache'
// 		},
// 		httpsAgent: new https.Agent({
// 			rejectUnauthorized: false
// 		})
// 	})
// 	.then(resp => {
// 		console.log(resp.data)
// 		res.render(path.resolve(__dirname, 'views', 'posts.ejs'), {
// 			title,
// 			posts: resp.data
// 		})
// 	})
// 	.catch(err => console.error(err))

// const posts = await Post.find()

// 	db.get('/posts/')
// 		.then(() => {
// 			console.log(posts)
// 			res.render(path.resolve(__dirname, 'views', 'posts.ejs'), {
// 				title,
// 				posts
// 			})
// 		})
// 		.catch(err => console.error(err))
