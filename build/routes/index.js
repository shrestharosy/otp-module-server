"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const otp_controller_1 = require("../api/otp/otp.controller");
const otp_middleware_1 = require("../api/otp/otp.middleware");
exports.default = () => {
    const router = (0, express_1.Router)();
    router.post('/verify', otp_middleware_1.validateOTP, otp_controller_1.otpController);
    return router;
};
