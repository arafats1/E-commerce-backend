import { HttpException } from '@nestjs/common';
export declare class PostNotFoundException extends HttpException {
    constructor(name: string);
}
