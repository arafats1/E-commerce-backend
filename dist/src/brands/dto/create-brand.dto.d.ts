interface Image {
    url: string;
    resolution: string;
    type: string;
}
export declare class CreateBrandDto {
    name: string;
    images: Image[];
}
export {};
