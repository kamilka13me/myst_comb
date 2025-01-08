-- CreateTable
CREATE TABLE "Discussion" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "organization" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "profession" TEXT NOT NULL,
    "agreeToTelegram" BOOLEAN,
    "agreeToViber" BOOLEAN,
    "agreeToProcess" BOOLEAN,
    "selectedBrick" TEXT[],
    "description" TEXT NOT NULL,
    "documentNames" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Discussion_pkey" PRIMARY KEY ("id")
);
