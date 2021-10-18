"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const logger = winston_1.createLogger({
    exitOnError: false,
    format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.json()),
    transports: [new winston_1.transports.Console()],
    level: process.env.LEVEL || 'info',
});
exports.default = logger;
