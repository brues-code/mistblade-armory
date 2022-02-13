import "dotenv/config";
import express from "express";
const app = express();

import controllers from "../src/controllers/controller";

app.get("/charsheet/:name", (req, res) => controllers.getCharSheet(req, res));

const port = process.env.PORT || 8001;

app.listen(port, () => {
    console.log(process.env.APIKEY);
    console.log(`Listening to port http://localhost:${port}`);
});
