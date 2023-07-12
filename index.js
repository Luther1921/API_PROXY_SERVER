const express = require("express");
const rateLimit = require("express-rate-limit");
const app = express();
require("dotenv").config();
const weatherRoutes = require("./routes/weatherRoutes");

const PORT = process.env.PORT || 4000;

// Rate Limiter
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 5,
});
app.use(limiter);
app.set("trust proxy", 1);

//Routes
app.use("/api", weatherRoutes);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
