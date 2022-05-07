import express, { Express, Router } from 'express';
import { Server } from 'http';

export class App {

    app: Express;
    server: Server;
    port: number;

    constructor() {
        this.app = express();
        this.port = 8002;
        this.initHealth();
    }

    initHealth(): void {
        const router: Router =  express.Router();
        router.get("/health", (req, resp) => {
            resp.status(200);
            resp.send("OK")
        })

    }

    public async init() {
        this.server = this.app.listen(this.port);
    }
}