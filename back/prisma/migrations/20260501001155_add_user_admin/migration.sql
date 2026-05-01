/*
  Warnings:

  - Added the required column `cartData` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "cartData" JSONB NOT NULL,
ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT false;
