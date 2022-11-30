import express from "express";
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import { Prisma, PrismaClient } from '@prisma/client';

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
import bcrypt from "bcrypt";
const authorization = require("./middleware/authorization");
import { jwtGenerator } from './util/jwtGenerator'

import cors from 'cors';

var app = express();

const prisma = new PrismaClient();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// app.use('/', indexRouter);

// //get users
// app.use('/users', usersRouter);


//Create a user
app.post("/register", async (req, res) => {
  
    try {
  
      //1. destructure the req.body (not needed yet)
      const { firstName, lastName, email, userName, password } = req.body;
  
      //2. check if user exist (if users does then throw error)
      const results: Array<string | number > = await prisma.$queryRaw`
        SELECT * FROM account WHERE email = ${email};
      `;
      console.log(results);
  
      if (results[0]) {
        return res.status(401).send("User already exist");
      }
  
      //3. Bcrypt the user password
      const saltRound = 10;
      const salt = await bcrypt.genSalt(saltRound);
  
      const bcryptPassword = await bcrypt.hash(password, salt);
  
      //4. Enter the new user inside our database
      interface accountArr {
        account_id: number;
        first_name: string;
        last_name: string;
        email: string;
        phone_num: string;
        account_status: number;
        username: string;
        hash_pass: string;
        }
      const user: Array<string | number > = await prisma.$queryRaw`
        INSERT INTO account (first_name, last_name, email, account_status, username, hash_pass) VALUES
        (${firstName}, ${lastName}, ${email}, 1, ${userName}, ${bcryptPassword});
        `;

      const newUser: accountArr[] = await prisma.$queryRaw`
        SELECT * FROM account WHERE email = ${email};
        `;
      
      console.log(newUser[0].account_id)
    //   //5. Generating our jwt token
       const token = jwtGenerator(newUser[0].account_id);
  
    //   res.json({ token });
  
      // res.status(201).json({
      //   status: "success",
      //   data: {
      //     user: results.rows[0]
      //   }
      // });
  
    } catch (error) {
      console.error(error);
    }
  });

app.get("/api/v1/accounts", async (req, res, next) => {
    try {
        const accounts = await prisma.account.findMany({
            where: {
                account_status: 1
            }
        });
        res.status(200).json({ accounts });
        
    } catch (error: any) {
        next(error.message)
    }
})

app.get("/api/v1/city", async (req, res, next) => {
    try {
        const city = await prisma.city.findMany();
        res.status(200).json({ city });
        
    } catch (error: any) {
        next(error.message)
    }
})

app.get("/api/v1/hotel", async (req, res, next) => {
    try {
        const hotels = await prisma.hotel.findMany();
        res.status(200).json({ hotels });

    } catch (error: any) {
        next(error.message)
    }
})


app.get("/api/v1/room/:id", async (req, res, next) => {
    try {
        const room = await prisma.room.findUnique({
            where: {
                room_id: Number(req.params.id) 
            }
        });
        res.status(200).json({ room });

    } catch (error: any) {
        next(error.message)
    }
})

















/* --------------------------------------Views------------------------------------------- */

app.get("/view1", async (req, res, next) => {
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

// app.get("/view1", async (req, res, next) => {
//     try {
//         const view1 = await prisma.$queryRaw(
//             Prisma.sql`
//                 SELECT city_name, hotel_id, chain_id
//                 FROM hotel AS h, hotel_chain AS hc, city as c
//                 WHERE c.city_id=h.hotel_city_id AND hc.chain_id=h.hotel_chain_id;
//             `
//         );
//         res.status(200).json({ view1 });

//     } catch (error: any) {
//         next(error.message)
//     }
// })

// app.get("/view1", async (req, res, next) => {
//     try {
//         const view1 = await prisma.$queryRaw(
//             Prisma.sql`
//                 SELECT city_name, hotel_id, chain_id
//                 FROM hotel AS h, hotel_chain AS hc, city as c
//                 WHERE c.city_id=h.hotel_city_id AND hc.chain_id=h.hotel_chain_id;
//             `
//         );
//         res.status(200).json({ view1 });

//     } catch (error: any) {
//         next(error.message)
//     }
// })

// app.get("/view1", async (req, res, next) => {
//     try {
//         const view1 = await prisma.$queryRaw(
//             Prisma.sql`
//                 SELECT city_name, hotel_id, chain_id
//                 FROM hotel AS h, hotel_chain AS hc, city as c
//                 WHERE c.city_id=h.hotel_city_id AND hc.chain_id=h.hotel_chain_id;
//             `
//         );
//         res.status(200).json({ view1 });

//     } catch (error: any) {
//         next(error.message)
//     }
// })

// app.get("/view1", async (req, res, next) => {
//     try {
//         const view1 = await prisma.$queryRaw(
//             Prisma.sql`
//                 SELECT city_name, hotel_id, chain_id
//                 FROM hotel AS h, hotel_chain AS hc, city as c
//                 WHERE c.city_id=h.hotel_city_id AND hc.chain_id=h.hotel_chain_id;
//             `
//         );
//         res.status(200).json({ view1 });

//     } catch (error: any) {
//         next(error.message)
//     }
// })

// app.get("/view1", async (req, res, next) => {
//     try {
//         const view1 = await prisma.$queryRaw(
//             Prisma.sql`
//                 SELECT city_name, hotel_id, chain_id
//                 FROM hotel AS h, hotel_chain AS hc, city as c
//                 WHERE c.city_id=h.hotel_city_id AND hc.chain_id=h.hotel_chain_id;
//             `
//         );
//         res.status(200).json({ view1 });

//     } catch (error: any) {
//         next(error.message)
//     }
// })

// app.get("/view1", async (req, res, next) => {
//     try {
//         const view1 = await prisma.$queryRaw(
//             Prisma.sql`
//                 SELECT city_name, hotel_id, chain_id
//                 FROM hotel AS h, hotel_chain AS hc, city as c
//                 WHERE c.city_id=h.hotel_city_id AND hc.chain_id=h.hotel_chain_id;
//             `
//         );
//         res.status(200).json({ view1 });

//     } catch (error: any) {
//         next(error.message)
//     }
// })

// app.get("/view1", async (req, res, next) => {
//     try {
//         const view1 = await prisma.$queryRaw(
//             Prisma.sql`
//                 SELECT city_name, hotel_id, chain_id
//                 FROM hotel AS h, hotel_chain AS hc, city as c
//                 WHERE c.city_id=h.hotel_city_id AND hc.chain_id=h.hotel_chain_id;
//             `
//         );
//         res.status(200).json({ view1 });

//     } catch (error: any) {
//         next(error.message)
//     }
// })

// app.get("/view1", async (req, res, next) => {
//     try {
//         const view1 = await prisma.$queryRaw(
//             Prisma.sql`
//                 SELECT city_name, hotel_id, chain_id
//                 FROM hotel AS h, hotel_chain AS hc, city as c
//                 WHERE c.city_id=h.hotel_city_id AND hc.chain_id=h.hotel_chain_id;
//             `
//         );
//         res.status(200).json({ view1 });

//     } catch (error: any) {
//         next(error.message)
//     }
// })

// app.get("/view1", async (req, res, next) => {
//     try {
//         const view1 = await prisma.$queryRaw(
//             Prisma.sql`
//                 SELECT city_name, hotel_id, chain_id
//                 FROM hotel AS h, hotel_chain AS hc, city as c
//                 WHERE c.city_id=h.hotel_city_id AND hc.chain_id=h.hotel_chain_id;
//             `
//         );
//         res.status(200).json({ view1 });

//     } catch (error: any) {
//         next(error.message)
//     }
// })

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})
