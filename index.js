const express = require('express');
const feedRoutes = require("./routes/userRouter");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use("/user",feedRoutes);

app.listen(8080);