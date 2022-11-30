
import { PrismaClient } from "@prisma/client";

import { accountSeed } from "./data/00_account";
import { bookingSeed } from "./data/01_booking";
import { bookingRoomSeed } from "./data/02_bookingRoom";
import { citySeed } from "./data/03_city";
import { hotelSeed } from "./data/04_hotel";
import { hotelChainSeed } from "./data/05_hotelChain";
import { roomSeed } from "./data/06_room";

const prisma = new PrismaClient();
 
const load = async () => {
  try {

    //Truncates tables
    await prisma.account.deleteMany()
    console.log('Deleted records in account table')

    await prisma.booking.deleteMany()
    console.log('Deleted records in booking table')

    await prisma.booking_room.deleteMany()
    console.log('Deleted records in booking_room table')

    await prisma.city.deleteMany()
    console.log('Deleted records in city table')

    await prisma.hotel.deleteMany()
    console.log('Deleted records in hotel table')

    await prisma.hotel_chain.deleteMany()
    console.log('Deleted records in hotal_chain table')

    await prisma.room.deleteMany()
    console.log('Deleted records in room table')

    
    //Seeds the Database
    await accountSeed();
    await citySeed();
    await hotelChainSeed();
    await hotelSeed();
    await roomSeed();
    await bookingSeed();
    await bookingRoomSeed();

    

  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

load()