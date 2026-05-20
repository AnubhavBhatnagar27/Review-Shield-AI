-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "productCategory" TEXT NOT NULL,
    "overallRating" DOUBLE PRECISION NOT NULL,
    "reviewText" TEXT NOT NULL,
    "fakeOrReal" TEXT NOT NULL,
    "sentiment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);
