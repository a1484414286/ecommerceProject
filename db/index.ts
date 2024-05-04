import {Pool} from 'pg';
import { initializeDB } from './Controllers/dbInitializer';

require('dotenv').config()

const pool = new Pool(
    {
        user : process.env.USER ,
        host :  process.env.HOST,
        database :  process.env.DATABASE,
        password : process.env.PASSWORD,
        port: 5432
    }
);

initializeDB(pool);


// pool.query('SELECT NOW()', (err, result) => {
//         if (err) {
//                 console.error('Error executing query', err.stack);
//                 return;
//         }
//         console.log('Query result:', result.rows);
// });

export default pool;