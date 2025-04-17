const express = require('express')
const mongoose = require('mongoose')

const logger = require('./utils/logger')
const blogsRouter = require('./controllers/blogs')
const app = express('/api/blogs', blogsRouter)
const config = require('./utils/config')

logger.info('connecting to MongoDB')
mongoose.connect(config.MONGODB_URI)

app.use(express.json())
app.use('/api/blogs', blogsRouter)

module.exports = app