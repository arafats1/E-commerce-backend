import { HttpException, HttpStatus } from '@nestjs/common';

export class PostNotFoundException extends HttpException {
    constructor(id: number) {
        super(`Property with ID ${id} not found`, HttpStatus.NOT_FOUND);
    }
    }