import express from 'express';

import CONFIG from './config';
import loaders from './loaders';

async function startServer() {
    const app = express();

    await loaders({ app });

    app.listen(CONFIG.PORT, () => {
        console.log(
            `⚡️[server]: Server is running at http://localhost:${CONFIG.PORT}`
        );
    });
}

startServer();
