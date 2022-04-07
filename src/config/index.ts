import * as dotenv from 'dotenv';

dotenv.config();

const CONFIG = {
    PORT: process.env.PORT || 4200,
    API_PREFIX: '/api/v1',
};

export default CONFIG;
