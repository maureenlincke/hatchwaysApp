const express = require('express');
const postsRouter = express.Router();

postsRouter.get('/', async (req, res, next) => {
    try {
        res.send({
            success: true,
        })
    } catch (error) {
        next(error)
    }
})

module.exports = postsRouter;