import express from 'express'
const router = express.Router();
import prisma from '../index'


export default router.get("/view4", async (req, res, next) => {
  try {
      const view4 = await prisma.$queryRaw`
              SELECT
              	booking.hotel_id
              	account.account_id
              FROM
              	account
              	LEFT JOIN booking ON account.account_id = booking.booking_id
              	UNION
              	SELECT
              		booking.hotel_id,
              		account.account_id
              	FROM
              		account
		            RIGHT JOIN booking ON account.account_id = booking.account_id;
          `;
      res.status(200).json({ view4 });

  } catch (error: any) {
      next(error.message)
  }
})