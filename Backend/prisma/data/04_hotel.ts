import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function hotelSeed() {
  return prisma.$queryRaw`
    INSERT INTO hotel (hotel_id, hotel_chain_id, hotel_city_id, hotel_name, hotel_address, phone_num, image_filepath) VALUES
    (5, 1, 1, 'Courtyard by Marriott Toronto Downtown', '475 Yonge St', '4169240611', NULL),
    (6, 1, 2, 'Courtyard by Marriott Ottawa Downtown', '350 Dalhousie St', '6132411000', NULL),
    (7, 2, 2, 'Raddison Something', '777 John Street', '4098882344', NULL),
    (8, 4, 5, 'Best Western', '898 West Road', '9098887654', NULL),
    (9, 6, 7, 'Teal Blue', '99 Aldon Streat', '4168889999', NULL),
    (10, 10, 10, 'John Wane', '101 Blue Street', '9057078986', NULL);
  `
}