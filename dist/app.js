"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes/routes"));
// middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// routes
app.use('/api/v1', routes_1.default);
app.get('/', (req, res) => {
    res.send('Hello from achieve flow server');
});
exports.default = app;
