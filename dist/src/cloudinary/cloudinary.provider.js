"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloudinaryProvider = void 0;
const cloudinary_1 = require("cloudinary");
const constants_1 = require("./constants");
exports.cloudinaryProvider = {
    provide: constants_1.CLOUDINARY,
    useFactory: () => {
        cloudinary_1.v2.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        });
        return cloudinary_1.v2;
    },
};
//# sourceMappingURL=cloudinary.provider.js.map