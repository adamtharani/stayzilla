import express from 'express'
const router = express.Router();
import prisma from '../index'


export default router.get("/view6", async (req, res, next) => {
  try {
      const view6 = await prisma.$queryRaw`
              SELECT * FROM booking
              WHERE MONTH(check_in) = MONTH(CURRENT_DATE())
              ORDER BY hotel_id;
          `;
      res.status(200).json({ view6 });

  } catch (error: any) {
      next(error.message)
  }
})