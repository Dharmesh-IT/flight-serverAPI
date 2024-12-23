
import express, { Request, Response } from "express";
import bodyParser from "body-parser";

import authRouter from "./v1/routes/auth";

const app = express();
const PORT = process.env.PORT || 3000;

// *** Routes ***
app.use(bodyParser.json());
app.use("/api/v1/auth", authRouter);

// app.get("/", async (req, res) => {
//   try {
//     const result = await db.query('SELECT * FROM "M_TravelProvider"');
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Internal Server Error");
//   }
// });
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
});
