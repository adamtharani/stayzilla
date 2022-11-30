import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function roomSeed() {
  return prisma.$queryRaw`
    INSERT INTO room (room_id, hotel_id, room_num, room_cost, room_type) VALUES
    (1, 5, 112, 150, 'large'),
    (2, 6, 100, 200, 'large'),
    (3, 6, 215, 100, 'medium'),
    (4, 7, 320, 350, 'large'),
    (5, 8, 101, 100, 'medium'),
    (6, 9, 205, 150, 'small'),
    (7, 5, 134, 450, 'small');
  `
}