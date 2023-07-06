import express from "express";
const app = express();

app.get("/api/data", (req, res) => {
  res.json({ message: "Node js api Route" });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port 5000`);
});
