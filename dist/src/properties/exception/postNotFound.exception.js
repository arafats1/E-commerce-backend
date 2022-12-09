"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class PostNotFoundException extends common_1.HttpException {
    constructor(id) {
        super(`Property with ID ${id} not found`, common_1.HttpStatus.NOT_FOUND);
    }
}
exports.PostNotFoundException = PostNotFoundException;
//# sourceMappingURL=postNotFound.exception.js.map