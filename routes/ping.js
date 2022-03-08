const express = require('express');
const pingRouter = express.Router();

pingRouter.get('/', async (req, res, next) => {
    try {
        res.send({
            success: true,
        })
    } catch (error) {
        next(error)
    }
})

module.exports = pingRouter;