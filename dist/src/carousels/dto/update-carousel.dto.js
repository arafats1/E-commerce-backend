"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCarouselDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_carousel_dto_1 = require("./create-carousel.dto");
class UpdateCarouselDto extends (0, swagger_1.PartialType)(create_carousel_dto_1.CreateCarouselDto) {
}
exports.UpdateCarouselDto = UpdateCarouselDto;
//# sourceMappingURL=update-carousel.dto.js.map