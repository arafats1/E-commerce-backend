"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSignUpDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_sign_up_dto_1 = require("./create-sign-up.dto");
class UpdateSignUpDto extends (0, swagger_1.PartialType)(create_sign_up_dto_1.CreateSignUpDto) {
}
exports.UpdateSignUpDto = UpdateSignUpDto;
//# sourceMappingURL=update-sign-up.dto.js.map