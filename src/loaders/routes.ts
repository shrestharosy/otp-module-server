import express from 'express';
import CONFIG from '../config';
import routes from '../routes';

export default ({ app }: { app: express.Application }) => {
    app.use(CONFIG.API_PREFIX, routes());
    app.get('/', (req, res) => res.send('Server Running Okay'));
    return app;
};
