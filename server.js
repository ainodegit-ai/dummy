
// server.js

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/auth.routes");
const homeRoutes = require("./routes/home.routes");
const aboutRoutes = require("./routes/about.routes");
const eventsRoutes = require("./routes/events.routes");
const academicsRoutes = require("./routes/academics.routes");
const db = require("./db");
const contactRoutes = require("./routes/contact.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Rankridge Backend Running");
});
app.use("/uploads", express.static("uploads"));
app.use("/api/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/home", homeRoutes);

app.use("/api/about", aboutRoutes);

app.use("/api/events", eventsRoutes);

app.use("/api/contact", contactRoutes);

app.use("/api/academics", academicsRoutes);
// app.use("/uploads", express.static("uploads"));


const admissionsRoutes = require("./routes/admissions.routes");

app.use("/api/admissions", admissionsRoutes);

const studentLifeRoutes = require("./routes/studentlife.routes");
app.use("/api/studentlife", studentLifeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
