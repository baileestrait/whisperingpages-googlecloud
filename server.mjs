import express from "express"; // or use require() if not using ES modules

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello from WhisperingPages on Cloud Run!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
