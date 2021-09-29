// create basic express server
const express = require("express");

// initialize express into variable called app
const app = express();

// app route/ end point
app.get("/", (req, res) =>
  res.json({ msg: "welcome to the contact keeper api" })
);

// define routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

// create variable for the port
const PORT = process.env.PORT || 5000;

// give app object a listen method (takes in port to listen on)
app.listen(PORT, () => console.log(`Server started n port ${PORT}`));
