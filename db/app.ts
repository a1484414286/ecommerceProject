import express, { Express, Request, Response, query } from "express";
import { initializeDB } from "./Controllers/dbInitializer";
import { Pool } from "pg";
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const app = express();
import pool from './index';

app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
const PORT =  process.env.SERVER_PORT || 8080;



initializeDB(pool);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req : Request, res : Response) => {
    res.send({ message: 'Hello from the backend!' });
});


//connect to the database and select everything from the users table
pool.connect().then(() => 
    {
        pool.query('SELECT * FROM users').then((result) => 
        {
            console.log(result.rows);
        })
    })
    .catch((err) => 
        { 
            console.error(err) 
        });

