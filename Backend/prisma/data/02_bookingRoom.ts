import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function bookingRoomSeed() {
  return prisma.$queryRaw`
    INSERT INTO booking_room (booking_id, room_id) VALUES
    (1, 1),
    (3, 6),
    (6, 1),
    (7, 4),
    (8, 2),
    (8, 3);
  `
}