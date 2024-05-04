import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import pool from '../db/index'; // Adjust the path to your actual db file
require('dotenv').config()
const port =  3000;
const app = express();

app.use(cors());
app.use(helmet());


app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.get('/data', async (req: Request, res: Response) => {
    try {
        const dbResult = await pool.query('SELECT NOW()');
        res.json({ timestamp: dbResult.rows[0].now });
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
