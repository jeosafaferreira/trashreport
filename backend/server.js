import express from "express";
import cors from "cors";
import reportsController from "./controllers/reportsController.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/reports", reportsController.list);
app.get("/reports/:id", reportsController.getReport);
app.delete("/reports/:id", reportsController.deleteReport);
app.post("/reports", reportsController.create);

app.listen(port, () => {
    console.log("Running!");
});
