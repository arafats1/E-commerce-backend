import { CreateCarouselDto } from './dto/create-carousel.dto';
import { UpdateCarouselDto } from './dto/update-carousel.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CarouselsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCarouselDto: CreateCarouselDto): import(".prisma/client").Prisma.Prisma__CarouselClient<import(".prisma/client").Carousel, never>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Carousel & {
        image: {
            url: string;
            resolution: string;
            type: string;
        }[];
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__CarouselClient<import(".prisma/client").Carousel & {
        image: {
            url: string;
            resolution: string;
            type: string;
        }[];
    }, never>;
    update(id: number, updateCarouselDto: UpdateCarouselDto): import(".prisma/client").Prisma.Prisma__CarouselClient<import(".prisma/client").Carousel, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__CarouselClient<import(".prisma/client").Carousel, never>;
}
