import express from "express";

const app = express();

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
