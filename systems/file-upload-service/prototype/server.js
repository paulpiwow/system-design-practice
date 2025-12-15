import express from "express";

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Health check endpoint
app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

// RESTful endpoint to create a new file resource
app.post("/files", (req, res) => {
  const { filename, size } = req.body;

  // Basic validation (REST principle: client sends data, server validates)
  if (!filename || !size) {
    return res.status(400).json({
      error: "filename and size are required",
    });
  }

  // Simulate creating a resource (no DB yet)
  res.status(201).json({
    message: "File created",
    file: {
      id: Date.now(),
      filename,
      size,
    },
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
