// Import the Express framework.
// Express simplifies building HTTP servers by handling routing,
// requests, responses, and middleware.
import express from "express";

// Create an Express application instance.
// This `app` object represents your backend server logic.
const app = express();

// Define a route handler for HTTP GET requests to "/ping".
// - "/ping" is the endpoint (URL path)
// - req (request) contains data sent by the client
// - res (response) is used to send data back to the client
app.get("/ping", (req, res) => {
  // Send a JSON response back to the client.
  // This confirms the server is running and reachable.
  res.json({ message: "pong" });
});

// Start the server and make it listen on port 3000.
// This tells the operating system:
// "Send all traffic on port 3000 to this application."
app.listen(3000, () => {
  // This callback runs once the server is successfully started.
  console.log("Server running on port 3000");
});

//“This Express server listens on a network port and exposes an 
// HTTP endpoint, allowing clients to communicate with a centralized 
// backend using stateless request–response interactions.”