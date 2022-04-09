"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOTP = void 0;
function validateOTP(req, res, next) {
    const { otp } = req.body;
    if (!otp) {
        return res.status(400).json({ message: 'OTP is required' });
    }
    const otpString = otp.toString();
    if (otpString.length !== 6) {
        return res.status(400).json({ message: 'OTP must be 6 digits long' });
    }
    if (otpString.charAt(otpString.length - 1) === '7') {
        return res.status(400).json({ message: 'Last digit cannot be 7' });
    }
    next();
}
exports.validateOTP = validateOTP;
