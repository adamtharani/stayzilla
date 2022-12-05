import express from 'express'
const router = express.Router();
import prisma from '../index'


export default router.get("/view10", async (req, res, next) => {
  try {
      const view10 = await prisma.$queryRaw`
              SELECT h.hotel_name, c.city_province
              FROM hotel H, city C
              WHERE h.hotel_city_id=c.city_id;
          `;
      res.status(200).json({ view10 });

  } catch (error: any) {
      next(error.message)
  }
})