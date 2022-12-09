import { v2 as cloudinary } from 'cloudinary';
export declare const cloudinaryProvider: {
    provide: string;
    useFactory: () => typeof cloudinary;
};
