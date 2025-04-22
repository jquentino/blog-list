const lodash = require('lodash')

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return lodash(blogs)
    .sumBy('likes')
}

const favoriteBlog = (blogs) => {
  return lodash(blogs)
    .orderBy(['likes'], ['desc'])
    .head() || {}
}

const mostBlogs = (blogs) => {
  return lodash(blogs)
    .countBy('author')
    .toPairs()
    .map(([author, blogs]) => ({ author, blogs }))
    .orderBy(['blogs'], ['desc'])
    .head() || {}
}

const mostLikes = (blogs) => {
  return lodash(blogs)
    .groupBy('author')
    .toPairs()
    .map(([author, blogs]) => ({ author, likes: lodash.sumBy(blogs, 'likes') }))
    .orderBy(['likes'], ['desc'])
    .head() || {}
}

// const mostLikes = (blogs) =>

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}