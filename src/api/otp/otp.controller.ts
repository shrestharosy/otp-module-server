import { Request, Response } from 'express';

export async function otpController(req: Request, res: Response) {
    res.json('Valid OTP');
}
