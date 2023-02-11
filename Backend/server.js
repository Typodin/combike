const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

const bikesRoutes = require("./routes/bikes");
const locationsRoutes = require("./routes/locations");
const reservationsRoutes = require("./routes/reservations");
const usersRoutes = require("./routes/users");

const errorHandler = require("./utils/errorHandler");

dotenv.config();

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(express.json());

// Use routes
app.use("/api/bikes", bikesRoutes);
app.use("/api/locations", locationsRoutes);
app.use("/api/reservations", reservationsRoutes);
app.use("/api/users", usersRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
