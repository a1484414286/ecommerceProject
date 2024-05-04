import { Pool } from 'pg';

async function initializeDB (pool : Pool) 
{
    try
    {
        const client = await pool.connect();
        await client.query('DROP TABLE IF EXISTS users');

        await client.query(
        `CREATE TABLE IF NOT EXISTS users 
        (
        id SERIAL PRIMARY KEY, 
        name VARCHAR(255), email VARCHAR(255)
        )`);

        await client.query(`
        INSERT INTO "users" (name, email) 
        VALUES 
        ('Alice', '12345@gmail.com'),
        ('Bob', '4124@gmail.com')`
        );

        client.release();
        console.log('Database initialized');
    }
    catch(err)
    {
        console.error('Error executing query:', err);
    }
}

module.exports = initializeDB;