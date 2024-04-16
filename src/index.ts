import { Pool } from 'pg';

const pool = new Pool({
  user: 'mypostgres',
  host: 'localhost',
  database: 'postgres',
  password: 'mysecretpassword',
  port: 5432,
});

const createUserTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        age INTEGER
      );
    `);
    console.log('User table created successfully');
  } catch (error) {
    console.error('Error creating User table', error);
  }
};

createUserTable();

// docker run --name mypostgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres

