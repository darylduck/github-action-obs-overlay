import express, { Request, Response } from 'express';

import { webSockets } from '../web-sockets';

const router = express.Router();

router.post('/', (req: Request, res: Response) => {
    const buildResult = { success: req.body?.data?.conclusion === 'success' };
    
    webSockets.forEach(ws => {
        ws.send(JSON.stringify(buildResult));
    });

    res.status(200).end();
});

export default router;