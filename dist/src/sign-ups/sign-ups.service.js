"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const brypt = require("bcrypt");
let SignUpsService = class SignUpsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createSignUpDto) {
        const saltOrRounds = 10;
        const password = createSignUpDto.password;
        const salt = brypt.genSaltSync(saltOrRounds);
        const hash = brypt.hashSync(password, salt);
        createSignUpDto.password = hash;
        return this.prisma.signUp.create({ data: createSignUpDto });
    }
    findAll() {
        return this.prisma.signUp.findMany({ include: { kyc: { include: { physicalAddress: { select: { country: true, city: true, postalCode: true } }, identificationDetails: { select: { idType: true, images: { select: { url: true, resolution: true, type: true } } } } } } } });
    }
    findOne(id) {
        return this.prisma.signUp.findUnique({ where: { id: id }, include: { kyc: { include: { physicalAddress: { select: { country: true, city: true, postalCode: true } }, identificationDetails: { select: { idType: true, images: { select: { url: true, resolution: true, type: true } } } } } } } });
    }
    findOneByEmail(email) {
        return this.prisma.signUp.findUnique({ where: { email: email } });
    }
    findOneByPhone(phone) {
        return this.prisma.signUp.findUnique({ where: { phone: phone } });
    }
    createKyc(id, createUserDto) {
        return this.prisma.user.create({
            data: Object.assign(Object.assign({}, createUserDto), { signUp: {
                    connect: {
                        id: id,
                    },
                }, physicalAddress: {
                    create: Object.assign({}, createUserDto.physicalAddress)
                }, identificationDetails: {
                    create: Object.assign(Object.assign({}, createUserDto.identificationDetails), { images: {
                            create: createUserDto.identificationDetails.images,
                        } })
                } })
        });
    }
    update(id, updateSignUpDto) {
        return this.prisma.signUp.update({ where: { id }, data: updateSignUpDto });
    }
    remove(id) {
        return this.prisma.signUp.delete({ where: { id } });
    }
};
SignUpsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SignUpsService);
exports.SignUpsService = SignUpsService;
//# sourceMappingURL=sign-ups.service.js.map