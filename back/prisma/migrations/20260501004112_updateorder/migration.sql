/*
  Warnings:

  - You are about to drop the column `stripePaymentIntentId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Order` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_userId_fkey";

-- DropIndex
DROP INDEX "Order_stripePaymentIntentId_key";

-- DropIndex
DROP INDEX "Order_userId_idx";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "stripePaymentIntentId",
DROP COLUMN "updatedAt",
ADD COLUMN     "payment" BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
