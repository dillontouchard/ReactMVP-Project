import express from "express";
import pg from "pg";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({ path: "../.env" });

const { PORT, DATABASE_URL } = process.env;

const client = new pg.Client({
  connectionString: DATABASE_URL,
});
// import { Pool } from "pg";

// const pool = new Pool({
//   host: "localhost",
//   port: 5432,
//   database: "chickenrun",
//   user: "dillon",
// });

console.log("DATABASE_URL:", DATABASE_URL);
await client.connect();

const app = express();

app.use(cors())

// app.use(express.static('./client'))

app.use(express.json());

app.get("/api/chickenrun", (req, res) => {
  client.query("SELECT * FROM gamescore").then((result) => {
    res.send(result.rows);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
