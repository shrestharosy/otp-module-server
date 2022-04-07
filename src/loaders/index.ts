import express from 'express';
import expressLoader from './express';
import routesLoader from './routes';

export default async ({ app }: { app: express.Application }) => {
    await expressLoader({ app });
    // Load API routes
    await routesLoader({ app });
};
