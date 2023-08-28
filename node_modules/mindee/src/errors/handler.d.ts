declare class ErrorHandler {
    throwOnError: boolean;
    constructor(throwOnError?: boolean);
    throw(error: Error): void;
}
export declare const errorHandler: ErrorHandler;
export {};
