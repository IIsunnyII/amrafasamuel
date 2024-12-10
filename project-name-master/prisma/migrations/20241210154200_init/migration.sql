-- CreateTable
CREATE TABLE `Dictionary` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `concept` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `unity` VARCHAR(191) NOT NULL,
    `bibliography` VARCHAR(191) NOT NULL,
    `status` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
