import { ApiProperty} from "@nestjs/swagger";
import { type } from "os";
export class CreateProductDto {
@ApiProperty()
    color: string;
@ApiProperty()
    size: string;



}
