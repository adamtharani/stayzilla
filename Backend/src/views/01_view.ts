import express from 'express'
const router = express.Router();
import prisma from '../index'


export default router.get("/view1", async (req, res, next) => {
  try {
      const view1 = await prisma.$queryRaw`
              SELECT city_name, hotel_id, chain_id
              FROM hotel AS h, hotel_chain AS hc, city as c
              WHERE c.city_id=h.hotel_city_id AND hc.chain_id=h.hotel_chain_id;
          `;
      res.status(200).json({ view1 });

  } catch (error: any) {
      next(error.message)
  }
})