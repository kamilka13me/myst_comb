-- CreateTable
CREATE TABLE "Support" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "organization" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "profession" TEXT NOT NULL,
    "expert" TEXT NOT NULL,
    "agreeToTelegram" BOOLEAN,
    "agreeToViber" BOOLEAN,
    "agreeToProcess" BOOLEAN,
    "selectedBrick" TEXT[],
    "selectedSupport" TEXT[],
    "services" TEXT NOT NULL,

    CONSTRAINT "Support_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Support_email_key" ON "Support"("email");
