const express = require('express');
const { getPostsByTag } = require('../data');
const postsRouter = express.Router();

postsRouter.get('/', async (req, res, next) => {
    try {
        const posts = await getPostsByTag("tech");
        res.send({
            posts
        })
    } catch (error) {
        next(error)
    }
})

module.exports = postsRouter;