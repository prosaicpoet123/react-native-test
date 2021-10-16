"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseParameter = void 0;
const parseParameter = (param) => {
    if (!param)
        return '';
    return Array.isArray(param) ? param[0] : param;
};
exports.parseParameter = parseParameter;
