"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const logger_1 = require("../logger");
class ErrorHandler {
    constructor(throwOnError = true) {
        this.throwOnError = throwOnError;
    }
    throw(error) {
        if (this.throwOnError) {
            throw error;
        }
        else {
            logger_1.logger.error(error.message);
        }
    }
}
exports.errorHandler = new ErrorHandler();
