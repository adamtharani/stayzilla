import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function hotelChainSeed() {
  return prisma.$queryRaw`
    INSERT INTO hotel_chain (chain_id, chain_name, legal_name) VALUES
    (1, 'Marriot', 'Canad Inns'),
    (2, 'Hampton Inn & Suites', 'Canalta Hotels'),
    (3, 'Days Inn', 'Days Inns'),
    (4, 'Days Hotel', 'Days Inns'),
    (5, 'Delta', 'Delta Hotels'),
    (6, 'Fairmont Hotel', 'Fairmont Hotels and Resorts'),
    (7, 'Four Seasons Hotel', 'Four Seasons Hotels and Resorts'),
    (8, 'Sandman Inns', 'Sandman Hotels'),
    (9, 'Holiday Inn', 'Temple Hotels'),
    (10, 'Courtyard Marriott', 'Temple Hotels'),
    (11, 'Wyndham', 'Temple Hotels');
  `
}