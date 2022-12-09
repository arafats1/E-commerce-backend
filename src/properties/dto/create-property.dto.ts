import { ApiProperty} from "@nestjs/swagger";
export class CreatePropertyDto {
    @ApiProperty()
    location: string;
    @ApiProperty()
    size: string;
    @ApiProperty()
    type : string;
}
