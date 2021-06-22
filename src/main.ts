import express from "express";

const app = express();
const port = 8002; // default port to listen on

// Define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
