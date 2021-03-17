const db = require('../../data/db-config')

// user-model
module.exports = {
  getPosts(user_id) {
    return db('posts')
      .join('users', 'posts.user_id', '=' , 'users.id')
      .where('user_id', user_id)
  },
}
