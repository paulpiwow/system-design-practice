import express from "express";

const app = express();
app.use(express.json());

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});
// RESTful endpoint
app.post("/files", (req, res) => {
  const { filename, size } = req.body;

  if (!filename || !size) {
    return res.status(400).json({
      error: "filename and size are required",
    });
  }

  const fileId = Date.now();

  // Respond immediately (optimize latency)
  res.status(201).json({
    message: "File accepted for processing",
    file: {
      id: fileId,
      filename,
      size,
      status: "processing",
    },
  });

  // Simulate heavy background work (optimize throughput)
  setTimeout(() => {
    console.log(`Finished processing file ${fileId}`);
  }, 3000);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
