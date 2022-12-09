"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_module_1 = require("./prisma/prisma.module");
const categories_module_1 = require("./categories/categories.module");
const items_module_1 = require("./items/items.module");
const users_module_1 = require("./users/users.module");
const sign_ups_module_1 = require("./sign-ups/sign-ups.module");
const biz_info_module_1 = require("./biz-info/biz-info.module");
const auth_module_1 = require("./auth/auth.module");
const products_module_1 = require("./products/products.module");
const sellers_module_1 = require("./sellers/sellers.module");
const brands_module_1 = require("./brands/brands.module");
const services_module_1 = require("./services/services.module");
const properties_module_1 = require("./properties/properties.module");
const carousels_module_1 = require("./carousels/carousels.module");
const core_1 = require("@nestjs/core");
const listings_module_1 = require("./listings/listings.module");
const cloudinary_module_1 = require("./cloudinary/cloudinary.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, categories_module_1.CategoriesModule, items_module_1.ItemsModule, users_module_1.UsersModule, sign_ups_module_1.SignUpsModule, biz_info_module_1.BizInfoModule, auth_module_1.AuthModule, products_module_1.ProductsModule, sellers_module_1.SellersModule, brands_module_1.BrandsModule, services_module_1.ServicesModule, properties_module_1.PropertiesModule, carousels_module_1.CarouselsModule, listings_module_1.ListingsModule, cloudinary_module_1.CloudinaryModule,],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, {
                provide: core_1.APP_PIPE,
                useClass: common_1.ValidationPipe,
            }],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map