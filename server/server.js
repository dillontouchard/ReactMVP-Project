import express from "express";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const { PORT, VITE_DATABASE_URL } = process.env;

const client = new pg.Client({
  connectionString: VITE_DATABASE_URL,
});
// import { Pool } from "pg";

// const pool = new Pool({
//   host: "localhost",
//   port: 5432,
//   database: "postgres",
//   user: "autumn",
// });

console.log("DATABASE_URL:", VITE_DATABASE_URL);
await client.connect();

const app = express();

app.use(express.static('./client'))

app.use(express.json());

app.get("/api/gamescore", (req, res) => {
  client.query("SELECT * FROM gamescore").then((result) => {
    res.send(result.rows);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
