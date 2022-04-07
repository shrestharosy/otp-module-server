import { Router } from 'express';
import { otpController } from '../api/otp/otp.controller';
import { validateOTP } from '../api/otp/otp.middleware';

export default () => {
    const router = Router();

    router.post('/verify', validateOTP, otpController);

    return router;
};
