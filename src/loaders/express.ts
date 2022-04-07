import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

export default async ({ app }: { app: express.Application }) => {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cookieParser());
    app.use(cors());

    console.log('🤭 Express Initialized');
    return app;
};
