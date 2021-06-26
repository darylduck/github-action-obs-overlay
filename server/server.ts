import express, { json } from 'express';

import homeUrl from './routes/home';
import build from './routes/build';
import { createWebsocketServer } from './web-sockets';

const app = express();

app.use(json());
app.use(express.static(homeUrl));
app.use('/build', build);

const serverPORT = process.env.PORT || 5000;

const server = app.listen(serverPORT, () => {
    console.log(`Server started on port ${serverPORT}`);
});

createWebsocketServer(server);