import { CarouselsService } from './carousels.service';
import { CreateCarouselDto } from './dto/create-carousel.dto';
import { UpdateCarouselDto } from './dto/update-carousel.dto';
export declare class CarouselsController {
    private readonly carouselsService;
    constructor(carouselsService: CarouselsService);
    create(createCarouselDto: CreateCarouselDto): import(".prisma/client").Prisma.Prisma__CarouselClient<import(".prisma/client").Carousel, never>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Carousel & {
        image: {
            url: string;
            resolution: string;
            type: string;
        }[];
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__CarouselClient<import(".prisma/client").Carousel & {
        image: {
            url: string;
            resolution: string;
            type: string;
        }[];
    }, never>;
    update(id: string, updateCarouselDto: UpdateCarouselDto): import(".prisma/client").Prisma.Prisma__CarouselClient<import(".prisma/client").Carousel, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__CarouselClient<import(".prisma/client").Carousel, never>;
}
