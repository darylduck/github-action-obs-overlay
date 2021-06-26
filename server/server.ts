import express, { json } from 'express';

import homeUrl from './routes/home';
import build from './routes/build';
import { createWebsocketServer } from './web-sockets';

const app = express();

app.use(json());
app.use(express.static(homeUrl));
app.use('/build', build);

const server = app.listen(5000, () => {
    console.log('Server started on port 5000');
});

createWebsocketServer(server);