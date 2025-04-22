const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/listHelper')
const testData = require("./blogsSampleData").blogs


test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  assert.strictEqual(result, 1)
})

describe('total likes', () => {
  test('list with zero blogs', () => {
    const result = listHelper.totalLikes([])
    assert.strictEqual(result, 0)
  })
  test('summing likes of all blogs', () => {
    const result = listHelper.totalLikes(testData)
    assert.strictEqual(result, 36)
  })
  test('when list has only one blog, equals the likes of that', () => {
    const blog = testData.filter((value) => value._id === '5a422a851b54a676234d17f7')
    const result = listHelper.totalLikes(blog)
    assert.strictEqual(result, 7)
  })
})

describe('favorite blog', () => {
  test('empty blog list', () => {
    const result = listHelper.favoriteBlog([])
    assert.deepStrictEqual(result, {})
  })
  test('searching in all blogs', () => {
    const result = listHelper.favoriteBlog(testData)
    const exceptedResult = {
      _id: "5a422b3a1b54a676234d17f9",
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
      likes: 12,
      __v: 0
    }
    assert.deepStrictEqual(result, exceptedResult)
  })
})

describe('most blogs author', () => {
  test('empty blog list', () => {
    const result = listHelper.mostBlogs([])
    assert.deepStrictEqual(result, {})
  })
  test('searching in all blogs', () => {
    const result = listHelper.mostBlogs(testData)
    const exceptedResult = {
      author: 'Robert C. Martin',
      blogs: 3
    }
    assert.deepStrictEqual(result, exceptedResult)
  })
})

describe('most likes author', () => {
  test('empty blog list', () => {
    const result = listHelper.mostLikes([])
    assert.deepStrictEqual(result, {})
  })
  test('searching in all blogs', () => {
    const result = listHelper.mostLikes(testData)
    const exceptedResult = {
      author: "Edsger W. Dijkstra",
      likes: 17
    }
    assert.deepStrictEqual(result, exceptedResult)
  })
})