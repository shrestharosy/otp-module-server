"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config"));
const routes_1 = __importDefault(require("../routes"));
exports.default = ({ app }) => {
    app.use(config_1.default.API_PREFIX, (0, routes_1.default)());
    app.get('/', (req, res) => res.send('Server Running Okay'));
    return app;
};
