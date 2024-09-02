const express = require("express");
const path = require("path");
const app = express();
const routes = require("./routes");

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "../public")));

// Serve Font Awesome CSS
app.use(
  "/font-awesome",
  express.static(
    path.join(__dirname, "../node_modules/@fortawesome/fontawesome-free")
  )
);

// Serve the home page directly
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

// API routes
app.use("/", routes);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = { app, server };
