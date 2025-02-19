"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryError = void 0;
class RepositoryError extends Error {
    constructor(message, cause) {
        super(message);
        this.cause = cause;
        this.name = 'RepositoryError';
    }
}
exports.RepositoryError = RepositoryError;
//# sourceMappingURL=RepositoryError.js.map