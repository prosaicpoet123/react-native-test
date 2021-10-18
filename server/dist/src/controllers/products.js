"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_json_1 = __importDefault(require("../db/data/products.json"));
const parseParameter_1 = require("../util/parseParameter");
const router = express_1.default.Router();
const PAGE_SIZE = parseInt(parseParameter_1.parseParameter(process.env.PAGE_SIZE)) || 25;
router.get('/all', (req, res) => {
    const page = parseInt(parseParameter_1.parseParameter(req.query.page));
    let data = products_json_1.default;
    if (page) {
        data = products_json_1.default.slice(page * PAGE_SIZE - PAGE_SIZE, page * PAGE_SIZE);
    }
    if (!data || !data.length) {
        return res.status(400).send({ message: 'No data' });
    }
    res.json({ products: data });
});
router.get('/:id', (req, res) => {
    const data = products_json_1.default.find((product) => product.id === req.params.id);
    if (!data) {
        return res.status(400).send({ message: 'No data' });
    }
    res.json({ product: data });
});
exports.default = router;
