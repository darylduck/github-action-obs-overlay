import express, { json } from 'express';
import { join } from 'path';

import build from './routes/build';
import { createWebsocketServer } from './web-sockets';

const app = express();
app.use(json());

if (process.env.API_ONLY !== 'true') {
    app.use(express.static(join(__dirname, '../client', 'build')));
}

app.use('/build', build);

const serverPORT = process.env.PORT || 5000;

const server = app.listen(serverPORT, () => {
    console.log(`Server started on port ${serverPORT}`);
});

createWebsocketServer(server);