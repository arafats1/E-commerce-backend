import { ApiProperty} from "@nestjs/swagger";

export class CreateCarouselDto {
    @ApiProperty()
    images: {
        url: string;
        resolution: string;
        type: string;
    };
}
