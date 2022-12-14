import express from "express";
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import jwt from 'jsonwebtoken';
import { account, Prisma, PrismaClient } from '@prisma/client';


// var usersRouter = require('./routes/users');
import bcrypt from "bcrypt";
const authorization = require("./middleware/authorization");
import { jwtGenerator } from './util/jwtGenerator'

import cors from 'cors';
var app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

// Import views
import view1Router from './views/01_view';
import view2Router from './views/02_view';
import view3Router from './views/03_view';
import view4Router from './views/04_view';
import view5Router from './views/05_view';
import view6Router from './views/06_view';
import view7Router from './views/07_view';
import view8Router from './views/08_view';
import view9Router from './views/09_view';
import view10Router from './views/10_view';

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/*-------Views-------*/
app.use('/', view1Router);
app.use('/', view2Router);
app.use('/', view3Router);
app.use('/', view4Router);
app.use('/', view5Router);
app.use('/', view6Router);
app.use('/', view7Router);
app.use('/', view8Router);
app.use('/', view9Router);
app.use('/', view10Router);


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


//Login in a user
app.post('/login', async (req, res) => {
    try {
      //1. destucture the res.body
      const { email, password } = req.body;
      console.log(req.body);

      if (req.body.email.length < 1 || req.body.password < 1) {
        return res.status(400).json("Please provide an email and password");
      }
  
      //2. check if user doesnt exist (if not throw error)
      const user: accountArr[] = await prisma.$queryRaw`SELECT * FROM account WHERE email = ${email}`;
      
      if (user[0] === undefined) {
        return res.status(401).json("Password or Email is incorrect");
      }
  
      //3. check if the incoming password is the same as the database password
  
      const validPassword = await bcrypt.compare(password, user[0].hash_pass);
  
      if (!validPassword) {
        return res.status(401).json("Password or Email is incorrect");
      }
  
      //4. give them jwt token
      const token = jwtGenerator(user[0].account_id);
      res.status(200).json({ token });
  
    } catch (error) {
      console.error(error);
    }
  });

//Create a user
app.post("/register", async (req, res) => {
  
    try {
        console.debug(req.body);
      //1. destructure the req.body (not needed yet)
      const { first_name, last_name, email, username, password } = req.body;

      if (first_name.length < 1 || last_name.length < 1 || email.length < 1 || username.length < 1 || password.length < 1) {
        return res.status(400).json("Please provide all fields");
      }

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
      const user: Array<string | number > = await prisma.$queryRaw`
        INSERT INTO account (first_name, last_name, email, account_status, username, hash_pass) VALUES
        (${first_name}, ${last_name}, ${email}, 1, ${username}, ${bcryptPassword});
        `;

      const newUser: accountArr[] = await prisma.$queryRaw`
        SELECT * FROM account WHERE email = ${email};
        `;
      
      console.log(newUser[0].account_id)
    //   //5. Generating our jwt token
       const token = jwtGenerator(newUser[0].account_id);
  
       res.status(200).json({ token });
  
    //   res.status(201).json({
    //     status: "success",
    //     data: {
    //       user: results.rows[0]
    //     }
    //   });
  
    } catch (error) {
      console.error(error);
    }
  });

app.get("/auth/is-verify", authorization, async (req, res) => {
  try {
    res.status(200).json(true);

  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error")
  }
})



// Functional API
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

app.get("/api/v1/hotel/:id", async (req, res, next) => {
    try {
        const hotel = await prisma.hotel.findUnique({
            where: {
                hotel_id: Number(req.params.id)
            }
        });
        res.status(200).json({ hotel });

    } catch (error: any) {
        next(error.message)
    }
})

app.get("/api/v1/booking", async (req, res, next) => {
    try {
        const booking = await prisma.booking.findMany();
        res.status(200).json({ booking });

    } catch (error: any) {
        next(error.message)
    }
})

app.get("/api/v1/bookingRoom", async (req, res, next) => {
    try {
        const bookingRoom = await prisma.booking_room.findMany();
        res.status(200).json({ bookingRoom });

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

//get available room for given city, size, check in, check out dates
app.post("/api/v1/avRoom", async (req, res, next) => {
    try {
        console.log(req.body);
        const { city, size, checkin, checkout } = req.body;

        const avRoom = await prisma.$queryRaw`
              SELECT * FROM room WHERE hotel_id IN (
                SELECT hotel_id FROM hotel WHERE hotel_city_id IN (
                    SELECT city_id FROM city WHERE city_name = ${city}
                )
              ) && room_type = ${size}
              
          `;

        console.log(avRoom);
        res.status(200).json({ avRoom });

    } catch (error: any) {
        next(error.message)
    }
})

//Booking a room
app.post("/api/v1/book", async (req, res, next) => {
    try {

        const { token, room_id, hotel_id, checkin, checkout } = req.body;

        
        const decoded = jwt.verify(token, process.env.JWT_SECRET as jwt.Secret);
        // @ts-ignore
        const { user, iat, exp } = decoded

        const booking = await prisma.booking.create({
            data: {
                account_id: Number(user),
                hotel_id: Number(hotel_id),
                check_in: new Date(checkin),
                check_out: new Date(checkout)
            }
        })
        const { booking_id } = booking

        const bookingRoom: Array<string | number > = await prisma.$queryRaw`
        INSERT INTO booking_room (booking_id, room_id) VALUES
        (${booking_id}, ${room_id})
        `;

        res.status(200).json(true);

    } catch (error: any) {
        next(error.message)
    }
})



















app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})

export default prisma;
