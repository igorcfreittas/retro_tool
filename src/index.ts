import { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import Server from './config/server';
import ErrorHandler from './handlers/ErrorHandler';
import Mongoose from './config/database';

dotenv.config({
    path: '.env'
});

const server = new Server();
const mongo = new Mongoose();
mongo.setup();

server.app.use(bodyParser.urlencoded({extended: false}));
server.app.use(bodyParser.json());
server.app.use('/api', server.router);
server.app.use(
    (
        err: ErrorHandler,
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        res.status(err.statusCode || 500).json({
            status: 'error',
            statusCode: err.statusCode,
            message: err.message
        });
    });

((port = process.env.APP_PORT || 5000) => {
    server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();