import { ApiProperty} from "@nestjs/swagger";
import { type } from "os";

export class CreateCategoryDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    images: 
        {
            url: string;
            resolution: string;
            type: string;
        }
    

}


