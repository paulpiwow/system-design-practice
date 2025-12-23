import express from "express";

const app = express();
app.use(express.json());

// Simulate a unique server instance (in real life: container ID)
const SERVER_ID = Math.floor(Math.random() * 10000);

app.get("/ping", (req, res) => {
  res.json({
    message: "pong",
    serverId: SERVER_ID,
  });
});

// REST endpoint
app.post("/files", (req, res) => {
  const { filename, size } = req.body;

  if (!filename || !size) {
    return res.status(400).json({
      error: "filename and size are required",
    });
  }

  const fileId = Date.now();

  // Respond immediately (latency)
  res.status(201).json({
    message: "File accepted for processing",
    file: {
      id: fileId,
      filename,
      size,
      status: "processing",
    },
    handledBy: SERVER_ID,
  });

  // Background processing (throughput)
  setTimeout(() => {
    console.log(`Server ${SERVER_ID} finished processing file ${fileId}`);
  }, 3000);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server ${SERVER_ID} running on port ${PORT}`);
});
