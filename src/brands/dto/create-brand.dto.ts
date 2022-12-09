import { ApiProperty} from "@nestjs/swagger";


interface Image {
    url: string;
    resolution: string;
    type: string;
}

export class CreateBrandDto {
    @ApiProperty()
    name: string;
    @ApiProperty({type: Array, isArray: true})
    images: Image[];

}
