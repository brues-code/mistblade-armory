import "dotenv/config";
import express from "express";
const app = express();

import controllers from "../src/controllers/controller";

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/charsheet/:name", controllers.getCharSheet);

const port = process.env.PORT || 8001;

app.listen(port, () => {
  console.log(`Listening to port http://localhost:${port}`);
});
