import express from "express";
import os from "os";
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});


app.get("/cpu", (req, res) => {
    for (let i = 0; i < 1000000000; i++) {
        Math.random();
    }
    res.send("Hello World");
});


app.get("/host", (req, res) => {
    res.send(os.hostname());
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});