import express from 'express'
const router = express.Router();
import prisma from '../index'


export default router.get("/view5", async (req, res, next) => {
  try {
      const view5 = await prisma.$queryRaw`
              SELECT * FROM hotel WHERE (hotel_city_id, hotel_chain_id)
              IN (
                  SELECT hotel_chain_id, hotel_city_id FROM HOTEL
                  WHERE hotel_city_id = (
              	        SELECT city_id FROM city
              	        WHERE city_name = 'toronto')
                      UNION
                      SELECT hotel_chain_id, hotel_city_id FROM hotel
                      WHERE
                      	hotel_chain_id = (
                      		SELECT chain_id FROM hotel_chain
                      		WHERE chain_name = 'marriot'));
          `;
      res.status(200).json({ view5 });

  } catch (error: any) {
      next(error.message)
  }
})