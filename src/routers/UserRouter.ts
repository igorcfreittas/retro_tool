import { NextFunction, Request, Response, Router } from 'express';
import UserController from '../controllers/UserController';

class UserRouter {
    private router: Router = Router();
    private userController: any = UserController;

    public get getRouter(): any {
        return this.router;
    }

    constructor() {
        this.configure();
    }

    private configure(): void {
        this.router.get('/', (req: Request, res: Response, next: NextFunction) => {
            res.status(200).json(this.userController.defaultMethod());
        });

        this.router.get('/error', (req: Request, res: Response, next: NextFunction) => {
            try {
                const result = this.userController.errorMethod();
                res.status(200).json(result);
            } catch (error) {
                next(error);
            }
        });

        this.router.post('/post', (req: Request, res: Response, next: NextFunction) => {
            try {
                const body = req.body;
                res.status(200).json(body);
            } catch (error) {
                next(error);
            }
        });
    }
}

export = new UserRouter().getRouter;