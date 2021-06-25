import WebSocket, { Server } from 'ws';
import express, { json, Request, Response } from 'express';
import { join } from 'path';

const app = express();
const webSockets: Array<WebSocket> = [];

app.use(json());
app.use(express.static(join(__dirname, '../client', 'build')));

app.post('/', (req: Request, res: Response) => {
    const buildResult = { success: req.body?.data?.conclusion === 'success' };
    
    webSockets.forEach(ws => {
        ws.send(JSON.stringify(buildResult));
    });

    res.status(200).end();
});

const server = app.listen(5000, () => {
    console.log('Server started on port 5000');
});

const wss = new Server({ server });

wss.on('connection', function connection(ws) {
    webSockets.push(ws);
});