/*
  Warnings:

  - You are about to drop the column `propertyId` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `serviceId` on the `Item` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_serviceId_fkey";

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "propertyId",
DROP COLUMN "serviceId";

-- CreateTable
CREATE TABLE "_ItemToService" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ItemToProperty" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ItemToService_AB_unique" ON "_ItemToService"("A", "B");

-- CreateIndex
CREATE INDEX "_ItemToService_B_index" ON "_ItemToService"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ItemToProperty_AB_unique" ON "_ItemToProperty"("A", "B");

-- CreateIndex
CREATE INDEX "_ItemToProperty_B_index" ON "_ItemToProperty"("B");

-- AddForeignKey
ALTER TABLE "_ItemToService" ADD CONSTRAINT "_ItemToService_A_fkey" FOREIGN KEY ("A") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemToService" ADD CONSTRAINT "_ItemToService_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemToProperty" ADD CONSTRAINT "_ItemToProperty_A_fkey" FOREIGN KEY ("A") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemToProperty" ADD CONSTRAINT "_ItemToProperty_B_fkey" FOREIGN KEY ("B") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;
