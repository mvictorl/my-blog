const createPath = require('../utils/create-path')
const db = require('../utils/restdb.client')

const getAllPosts = async (_, res) => {
	const title = 'Posts'

	const posts = await db.get('/posts?sort=_created&dir=-1')

	res.render(createPath('posts'), {
		title,
		posts: posts.data
	})
}

const getPostById = async (req, res) => {
	const title = `Post ${req.params.id}`

	// const post = await Post.findById(req.params.id)
	const post = await db.get(`/posts/${req.params.id}?metafields=_created`)

	res.render(createPath('post'), {
		title,
		post: post.data
	})
}

const deletePostById = async (req, res) => {
	// await Post.findByIdAndDelete(req.params.id)
	const post = await db.delete(`/posts/${req.params.id}`)
	res.redirect(302, '/posts')
}

const getAddPostPage = async (req, res) => {
	const title = 'Add post'
	res.render(createPath('add-post'), { title })
}

const postAddPost = async (req, res) => {
	const { title, text, author } = req.body
	const post = {
		title,
		author,
		text
	}
	const ret = await db.post('/posts', post)

	res.redirect(`/post/${ret.data._id}`)
}

module.exports = {
	getAllPosts,
	getPostById,
	deletePostById,
	getAddPostPage,
	postAddPost
}
