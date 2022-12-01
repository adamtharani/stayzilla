import express from 'express'
const router = express.Router();
import prisma from '../index'


export default router.get("/view9", async (req, res, next) => {
  try {
      const view9 = await prisma.$queryRaw`
              SELECT count(room_id), hotel_id FROM room GROUP BY hotel_id;
          `;
      res.status(200).json(
        JSON.stringify(
          {view9},
          (key, value) => (typeof value === 'bigint' ? value.toString() : value) // return everything else unchanged
        )
      );

  } catch (error: any) {
      next(error.message)
  }
})