"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("./user.controller"));
const userRoutes = (0, express_1.Router)();
userRoutes.get('/:email', user_controller_1.default.getUserByEmail);
userRoutes.post('/', user_controller_1.default.postUser);
exports.default = userRoutes;
