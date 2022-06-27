const createPath = require('../utils/create-path')
const db = require('../utils/restdb.client')

const getContactPage = async (req, res) => {
	const title = 'Contacts'
	const contacts = [
		{ name: 'YouTube', link: 'http://youtube.com/' },
		{ name: 'Twitter', link: 'http://github.com/' },
		{ name: 'GitHub', link: 'http://twitter.com/' }
	]
	res.render(createPath('contacts'), {
		title,
		contacts
	})
}

module.exports = {
	getContactPage
}
