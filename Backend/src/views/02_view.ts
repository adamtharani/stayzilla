import express from 'express'
const router = express.Router();
import prisma from '../index'


export default router.get("/view2", async (req, res, next) => {
  try {
      const view2 = await prisma.$queryRaw`
              SELECT room_cost, count(room_cost), room_type
              FROM room
              WHERE room_cost = ANY (SELECT room_cost FROM room WHERE room_cost >= 100)
              GROUP BY room_cost, room_type;
          `;
      JSON.stringify(
        view2,
        (key, value) => (typeof value === 'bigint' ? value.toString() : value) // return everything else unchanged
      )
      
      res.status(200).json(
        JSON.stringify(
          {view2},
          (key, value) => (typeof value === 'bigint' ? value.toString() : value) // return everything else unchanged
        )
      );

  } catch (error: any) {
      next(error.message)
  }
})