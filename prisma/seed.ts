import { PrismaClient } from "@prisma/client";
import { create } from "domain";

//Initialize the prisma client
const prisma = new PrismaClient();

async function main() {
 

  // const item2 = await prisma.item.create({
  //   data: {
  //     name: "Plumbing",
  //     categoryId: 1,
  //     listings: {
  //       create: {
  //         itemprice: "0.007BETH",
  //         description: "Best plumbing services",
  //         services: {
  //           create: {
  //             service: {
  //               create: {
  //                 type: "plumbing"
  //               }
  //             }
  //           }
  //         }
  //       }
  //     },
  //     images: {
  //       create: {
  //         url: "https://www.google.com",
  //         resolution: "1920x1080",
  //         type: "item images"
  //       }
  //     }
  //   }
  // });

  // const item3 = await prisma.item.create({
  //   data: {
  //     name: "Macbook Pro",
  //     categoryId: 2,
  //     brandId: 1,
  //     listings: {
  //       create: {
  //         itemprice: "0.027BTC",
  //         description: "2021 Macbook Pro",
  //         quantity: 190,
  //         products: {
  //           create: {
  //             product: {
  //               create: {
  //                 color : "silver",
  //                 size: "13 inch",
  //               }
  //             }
  //           }
  //         }
  //       }
  //     },
  //     images: {
  //       create: {
  //         url: "https://www.google.com",
  //         resolution: "1920x1080",
  //         type: "item images"
  //       }
  //     }
  //   }
  // });

  // const item4 = await prisma.item.create({
  //   data: {
  //     name: "Buildings",
  //     categoryId: 4,
  //     listings: {
  //       create: {
  //         itemprice: "4.007BTC",
  //         description: "Recently built houses",
  //         quantity: 4,
  //         properties: {
  //           create: {
  //             property: {
  //               create: {
  //                  location: "Nairobi",
  //                   type: "house",
  //                   size: "1000sqft"
  //               }
  //             }
  //           }
  //         }
  //       }
  //     },
  //     images: {
  //       create: [
  //         {
  //           url: "https://www.google.com",
  //           resolution: "1920x1080",
  //           type: "item images"
  //         },
  //         {
  //           url: "https://www.google.com",
  //           resolution: "1920x1080",
  //           type: "item images"
  //         }
  //       ]
  //     }
  //   }
  // });


  // const user1 = await prisma.user.create({
  //   data: {
  //     firstName: "Debbie",
  //     lastName: "Atwiine",
  //     dateOfBirth: "01/01/1990",
  //     nationality: "Ugandan",
  //     areaOfResidence:"Mutungo",
  //     signUpId:1,
  //     physicalAddress: {
  //       create: {
  //         country: "Uganda",
  //         city: "Kampala",
  //         postalCode: "256",
  //       }
  //     },
  //     identificationDetails: {
  //       create: {
  //         idType: "National ID",
  //         images: {
  //           create: [
  //             {
  //               url: "https://www.google.com",
  //               resolution: "1920x1080",
  //               type: "front view of ID"
  //             },
  //             {
  //               url: "https://www.google.com",
  //               resolution: "1920x1080",
  //               type: "back view of ID"
  //             },
  //             {
  //               url: "https://www.google.com",
  //               resolution: "1920x1080",
  //               type: "facial recognition"
  //             }
  //           ]
  //         }
  //       }
  //     },
  //   }
  // });

  // const listing = await prisma.listing.create({
  //   data: {
  //     description: "Quality Computers",
  //     bizInfoId: 1,
  //     productListing: {
  //       create: {
  //         color: "red",
  //         size: "13 inch",
  //         quantity: 100,
  //         price: 0.027,
  //         currencies: {
  //           create: {
  //             currencyName: "Bitcoin",
  //           },
  //         },
  //         products: {
  //           create: {
  //             items: {
  //               create: {
  //                 name: "Macbook Pro",
  //                 popular: true,
  //                 dailyDeals: true,
  //                 categoryName: "Computers",
  //                 brandName: "Apple",
  //                 images: {
  //                   create: [{
  //                     url: "https://www.google.com",
  //                     resolution: "1920x1080",
  //                     type: "item image 1"
  //                   },
  //                   {
  //                     url: "https://www.google.com",
  //                     resolution: "1920x1080",
  //                     type: "item image 2"
  //                   }]
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // });

  const item  = await prisma.item.create({
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
      
    

  // const listing2 = await prisma.listing.create({
  //   data: {
  //     description: "Computer repair and maintenance",
  //     bizInfoId: 1,
  //     serviceListing: {
  //       create: {
  //         price: 0.007,
  //         currencies: {
  //           create: {
  //             currencyName: "Bitcoin",
  //           },
  //         },
  //         services: {
  //           create: {
  //             type: "Computer Repairing",
  //             items: {
  //               create: {
  //                 name: "Computer Repair",
  //                 popular: true,
  //                 dailyDeals: false,
  //                 categoryName: "services",
  //                 images: {
  //                   create: [{
  //                     url: "https://www.google.com",
  //                     resolution: "1920x1080",
  //                     type: "item image 1"
  //                   },
  //                   {
  //                     url: "https://www.google.com",
  //                     resolution: "1920x1080",
  //                     type: "item image 2"
  //                   }]
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // });

  // const listing3 = await prisma.listing.create({
  //   data: {
  //     description: "Condors for sale",
  //     bizInfoId: 1,
  //     propertyListing: {
  //       create: {
  //         size: "1000sqft",
  //         price: 10.007,
  //         currencies: {
  //           create: {
  //             currencyName: "Ethereum",
  //           },
  //         },
  //         properties: {
  //           create: {
  //             type: "Condominum Houses",
  //             location: "Kampala, Uganda",
  //             items: {
  //               create: {
  //                 name: "Condominium House",
  //                 popular: true,
  //                 dailyDeals: false,
  //                 categoryName: "Buildings",
  //                 images: {
  //                   create: [{
  //                     url: "https://www.google.com",
  //                     resolution: "1920x1080",
  //                     type: "item image 1"
  //                   },
  //                   {
  //                     url: "https://www.google.com",
  //                     resolution: "1920x1080",
  //                     type: "item image 2"
  //                   }]
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // });



  

  // const signUp1 = await prisma.signUp.create({
  //   data: {
  //     email:"debbie.atwiine@gmail.com",
  //     phone: "0784528444",
  //     password: "1234567",
      
  //   }
  // })

  // const signUp2 = await prisma.signUp.create({
  //   data: {
  //     email:"brisa.mukunde@gmail.com",
  //     phone: "0784528445",
  //     password: "123475",
      
  //   }
  // })

  // const bizInfo = await prisma.bizInfo.create({
  //   data: {
  //      businessName: "Debbie Atwiine's Shop",
  //      typeOfBusiness: "Online Shop",
  //      referredBy: "John@gmail.com",
  //       taxID : "12345",
  //       registrationNo : "12345897",
  //       images: {
  //         create: {
  //           url: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
  //           resolution: "300x300",
  //           type: "logo"
  //         },
         
  //       },
  //       physicalAddress: {
  //         create: {
  //           country: "Uganda",
  //           city: "Kampala",
  //           postalCode: "12345"
  //         }
  //       },
  //       paymentDetails: {
  //         create: {
  //           bankAccounts: {
  //             create: [{
  //               bankName: "Stanbic Bank",
  //               accountName: "Debbie Atwiine",
  //               accountNumber: "1234567890",
  //               swiftCode: "1234567890"
  //             },
  //             {
  //               bankName: "Bannk of Baroda",
  //               accountName: "Debbie Atwiine",
  //               accountNumber: "1234567890",
  //               swiftCode: "1234567890"
  //             }
  //           ]
  //           },
  //          cryptoCurrencyAccounts: {
  //             create: {
  //               walletAddress: "0x1234567890",
  //               accountId: "1234567890"
  //             }
  //           },
  //           mobileMoneyAccounts: {
  //             create: {
  //               name: "Debbie Atwiine",
  //               number: "0784528444"
  //             }
  //           },
  //         }
  //       }
       
  //   },

  // });

 

  // const seller = await prisma.seller.create({
  //   data: {
  //     bizInfoId: 1,
  //     userId: 1,
  //     signUpId: 1,
  //   }
  // })


//   const category = await prisma.category.create({
//     data: {
//       name: "services",
//       images: {
//         create: {
//           url: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
//           resolution: "300x300",
//           type: "feature-photo"
//         },
//       },
//  }});

// const category5 = await prisma.category.create({
//   data: {
//     name: "Computers",
//     images: {
//       create: {
//         url: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
//         resolution: "300x300",
//         type: "feature-photo"
//       },
//     },
// }});

//  const category2 = await prisma.category.create({
//   data: {
//     name: "Electronics",
//     images: {
//       create: {
//         url: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
//         resolution: "300x300",
//         type: "feature-photo"
//       },
//     },
// }});

// const category3 = await prisma.category.create({
//   data: {
//     name: "Buildings",
//     images: {
//       create: {
//         url: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
//         resolution: "300x300",
//         type: "feature-photo"
//       },
//     },
// }})

// const category4 = await prisma.category.create({
//   data: {
//     name: "Furniture",
//     images: {
//       create: {
//         url: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
//         resolution: "300x300",
//         type: "feature-photo"
//       },
//     },
// }})

// const brand = await prisma.brand.create({
//   data: {
//     name: "Apple",
//     images: {
//       create: {
//         url: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
//         resolution: "300x300",
//         type: "feature-photo"
//       },
//     },
// }});


// const brand5 = await prisma.brand.create({
//   data: {
//     name: "Coca Cola",
//     images: {
//       create: {
//         url: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
//         resolution: "300x300",
//         type: "feature-photo"
//       },
//     },
// }})

// const brand2 = await prisma.brand.create({
//   data: {
//     name: "Nike",
//     images: {
//       create: {
//         url: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
//         resolution: "300x300",
//         type: "feature-photo"
//       },
//     },
// }})

// const brand3 = await prisma.brand.create({
//   data: {
//     name: "Samsung",
//     images: {
//       create: {
//         url: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
//         resolution: "300x300",
//         type: "feature-photo"
//       },
//     },
// }})

// const brand4 = await prisma.brand.create({
//   data: {
//     name: "Hisense",
//     images: {
//       create: {
//         url: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
//         resolution: "300x300",
//         type: "feature-photo"
//       },
//     },
// }})
}


  // execute the main function
main()
.catch((e) => {
  console.error(e);
  process.exit(1);
})
.finally(async () => {
  // close Prisma Client at the end
  await prisma.$disconnect();

});