/*
  Warnings:

  - You are about to drop the column `endereco` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `foto` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `clientes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "clientes" DROP COLUMN "endereco",
DROP COLUMN "foto",
DROP COLUMN "telefone";
