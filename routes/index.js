const apiRouter = require('express').Router();

apiRouter.get('/', (req, res, next) => {
    res.send({
        message: 'API is under construction'
    });
});

const pingRouter = require('./ping');
apiRouter.use('/ping', pingRouter);

const postsRouter = require('./posts');
apiRouter.use('/posts', postsRouter);

module.exports = apiRouter;