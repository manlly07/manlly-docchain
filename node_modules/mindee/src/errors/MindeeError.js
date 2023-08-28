"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MindeeError = void 0;
class MindeeError extends Error {
    constructor(message) {
        super(message);
        this.name = "MindeeError";
    }
}
exports.MindeeError = MindeeError;
