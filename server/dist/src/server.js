"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = __importDefault(require("./controllers"));
const middleware_1 = __importDefault(require("./middleware"));
const logger_1 = __importDefault(require("./util/logger"));
require('dotenv').config();
const PORT = process.env.PORT || 4000;
function createServer() {
    const server = express_1.default();
    server.use(middleware_1.default);
    server.use(controllers_1.default);
    return server;
}
function startServer() {
    logger_1.default.info('Starting server... 👀');
    const server = createServer();
    server.listen(PORT, () => {
        logger_1.default.info(`Server listening on port ${PORT} 🚀`);
    });
}
exports.default = startServer;
