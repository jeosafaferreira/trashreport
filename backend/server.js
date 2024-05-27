import express from "express";
import cors from "cors";
import reportsController from "./controllers/reportsController.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/reports", reportsController.list);
app.post("/reports", reportsController.create);

app.listen(port, () => {
    console.log("Running!");
});
