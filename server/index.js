const WebSocket = require('ws');
const express = require('express');
const path = require('path');
const app = express();
const webSockets = [];

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client', 'build')));

app.post('/', (req, res) => {
    const result = { success: req.body.data.conclusion === 'success' };
    
    webSockets.forEach(ws => {
        ws.send(JSON.stringify(result));
    });

    res.status(200).end();
});

const server = app.listen(5000, () => {
    console.log('Server started on port 5000');
});

const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
    webSockets.push(ws);
});