const express = require('express');
const userRoutes = require("./routes/userRouter");
const authRoutes = require("./routes/authRouter");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use("/user",userRoutes);
app.use("/auth",authRoutes);

app.listen(8080);