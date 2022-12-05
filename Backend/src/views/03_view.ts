import express from 'express'
const router = express.Router();
import prisma from '../index'


export default router.get("/view3", async (req, res, next) => {
  try {
      const view3 = await prisma.$queryRaw`
              SELECT * FROM room AS r
              WHERE room_cost = ( SELECT MAX(room_cost) FROM room 
                    WHERE r.room_type = room_type );
          `;
      res.status(200).json({ view3 });

  } catch (error: any) {
      next(error.message)
  }
})