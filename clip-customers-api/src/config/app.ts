import express, { Application, Request, response, Response } from 'express';
import cors from 'cors';
import CustomerRoutes from '../routes/customer.routes';
import { ENV, OPEN_API_KEY, MERCHANT_ID } from './settings';

export class App {
    public app: Application;
    constructor(private readonly port?: number | string){
        this.app = express();
        this.settings();
        this.initializeRoutes();
        this.listen();
    }

    public settings(){
        if(!OPEN_API_KEY || !MERCHANT_ID){
            console.error("OPEN_API_KEY OR MERCHANT_ID Not found, please add this values");
            throw "API server needs more arguments to run.";
        }
        this.app.set('port', this.port || process.env.PORT || 8000);
        this.app.use(express.json());
        this.app.use(cors());
    }

    public listen(){
        if (process.env.NODE_ENV !== 'test') {
            return this.app.listen(this.app.get('port'), () => {
                console.log(`Server on env: ${ENV} listening on port ${this.app.get('port')}`);
            });
        }
    }

    public getServer(){
        return this.app;
    }

    private initializeRoutes(){
        this.app.get('/', (req, res) => {
            res.json('Ok, server up and running');
        });
        this.app.use('/api/', CustomerRoutes);
        this.app.get('*', (request: Request, response: Response) => {
            response.status(400).send("Page not found!");
        });
    }
}