/*
  Warnings:

  - The primary key for the `Movie` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Movie` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_pkey",
DROP COLUMN "id",
ADD COLUMN     "_id" SERIAL NOT NULL,
ADD CONSTRAINT "Movie_pkey" PRIMARY KEY ("_id");
