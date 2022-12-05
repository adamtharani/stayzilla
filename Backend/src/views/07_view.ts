import express from 'express'
const router = express.Router();
import prisma from '../index'


export default router.get("/view7", async (req, res, next) => {
  try {
      const view7 = await prisma.$queryRaw`
              SELECT * FROM booking WHERE MONTH(check_out) = MONTH(CURRENT_DATE())
              ORDER BY hotel_id;
          `;
      res.status(200).json({ view7 });

  } catch (error: any) {
      next(error.message)
  }
})