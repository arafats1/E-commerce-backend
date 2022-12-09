/*
  Warnings:

  - You are about to drop the column `productListingId` on the `Product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_productListingId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "productListingId";

-- CreateTable
CREATE TABLE "_ProductToProductListing" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToProductListing_AB_unique" ON "_ProductToProductListing"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToProductListing_B_index" ON "_ProductToProductListing"("B");

-- AddForeignKey
ALTER TABLE "_ProductToProductListing" ADD CONSTRAINT "_ProductToProductListing_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToProductListing" ADD CONSTRAINT "_ProductToProductListing_B_fkey" FOREIGN KEY ("B") REFERENCES "ProductListing"("id") ON DELETE CASCADE ON UPDATE CASCADE;
