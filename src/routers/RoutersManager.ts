import { Router } from 'express';
import UserRouter from './UserRouter';

class RoutersManager {
    private router: Router = Router();
    private userRouter: any = UserRouter;

    public get getRouter(): any {
        return this.router;
    }

    constructor() {
        this.configure();
    }

    private configure()  {
        this.router.use('/user', this.userRouter);
    }
}

export = new RoutersManager().getRouter;