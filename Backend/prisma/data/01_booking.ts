import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function bookingSeed() {
  return prisma.$queryRaw`
    INSERT INTO booking (booking_id, account_id, hotel_id, check_in, check_out) VALUES
    (1, 2, 5, '2022-04-10', '2022-04-12'),
    (2, 2, 5, '2022-11-06', '2022-11-07'),
    (3, 7, 9, '2022-05-01', '2022-05-04'),
    (4, 10, 7, '2022-11-06', '2022-12-07'),
    (5, 10, 6, '2022-03-12', '2022-03-14'),
    (6, 8, 5, '2022-11-06', '2022-12-07'),
    (7, 21, 7, '2022-10-21', '2022-10-25'),
    (8, 6, 9, '2022-11-06', '2022-12-07');
  `
}