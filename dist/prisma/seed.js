"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const item = await prisma.item.create({
        data: {
            name: "Iphone 11 pro",
            popular: true,
            dailyDeals: true,
            categoryName: "Phones",
            brandName: "Apple",
            images: {
                create: {
                    url: "https://www.google.com",
                    resolution: "1920x1080",
                    type: "item image 1"
                }
            },
            product: {
                create: {
                    productListing: {
                        create: {
                            color: "Black",
                            size: "6 inch",
                            quantity: 50,
                            price: 0.027,
                            currencies: {
                                create: {
                                    currencyName: "Ethereum",
                                },
                            },
                        }
                    }
                }
            }
        }
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map