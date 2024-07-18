if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const expressError = require("./utils/ExpressError");
const passport = require('passport');
const path = require('path');
const prerender = require('prerender-node'); // Add this line
require("./utils/crons");

const DB_URL = process.env.DB_URL;
mongoose.connect(DB_URL);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => {
    console.log("Database connected")
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174", process.env.SITE_URL, process.env.ADMIN_URL, "https://pinnacle.biz", "https://pinnacle.biz/login"],
    credentials: true
}));
app.use(passport.initialize());

// Prerender middleware setup
app.use(prerender.set('prerenderToken', process.env.PRERENDER_TOKEN));
app.use((req, res, next) => {
    console.log('Prerender middleware triggered for URL:', req.url);
    next();
});
const authRoutes = require("./routes/authRoutes");
app.use('/auth', authRoutes);
const userRoute = require("./routes/userRoute");
app.use("/user", userRoute);
const adminRoute = require("./routes/adminRoute");
app.use("/admin", adminRoute);
const paymentRoute = require("./routes/paymentRoute");
app.use("/payment", paymentRoute);
const jobRoute = require("./routes/jobRoutes");
app.use("/job", jobRoute);
const applicationRoute = require("./routes/applicationRoutes");
app.use("/application", applicationRoute);

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.all("*", (req, res, next) => {
    next(new expressError('page not found', 404));
});

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = "Something went wrong";
    console.log(err);
    res.status(statusCode).json(err.message);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
