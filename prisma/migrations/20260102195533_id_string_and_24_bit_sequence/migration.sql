/*
  Warnings:

  - The primary key for the `Movie` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_pkey",
ALTER COLUMN "_id" DROP DEFAULT,
ALTER COLUMN "_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Movie_pkey" PRIMARY KEY ("_id");
DROP SEQUENCE "Movie__id_seq";
