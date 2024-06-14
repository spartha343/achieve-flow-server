"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const mongoose_1 = require("mongoose");
const task_constants_1 = require("./task.constants");
const taskSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    deadline: {
        type: Date,
    },
    priority: {
        type: String,
        enum: task_constants_1.priorityTypes,
        default: 'low',
        required: true,
    },
    status: {
        type: String,
        enum: task_constants_1.taskStatusTypes,
        default: 'to-do',
        required: true,
    },
}, {
    timestamps: true,
});
exports.Task = (0, mongoose_1.model)('Task', taskSchema);
