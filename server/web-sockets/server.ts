import WebSocket from 'ws';

import { webSockets } from './data';

export const createWebsocketServer = (server: any): WebSocket.Server => {
    const wss = new WebSocket.Server({ server });

    wss.on('connection', function connection(ws) {
        webSockets.push(ws);
    });

    return wss;
};