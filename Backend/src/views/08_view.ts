import express from 'express'
const router = express.Router();
import prisma from '../index'


export default router.get("/view8", async (req, res, next) => {
  try {
      const view8 = await prisma.$queryRaw`
              SELECT * FROM account
          `;
      res.status(200).json({ view8 });

  } catch (error: any) {
      next(error.message)
  }
})