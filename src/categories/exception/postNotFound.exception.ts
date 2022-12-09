import { HttpException, HttpStatus } from '@nestjs/common';

export class PostNotFoundException extends HttpException {
    constructor(name: string) {
        super(`Category with ID ${name} not found`, HttpStatus.NOT_FOUND);
    }
    }