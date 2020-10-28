import express from 'express';
import RouterManager from '../routers/RoutersManager';

class Server {
    public app: any = express();
    public router: any = RouterManager;
}

export = Server;