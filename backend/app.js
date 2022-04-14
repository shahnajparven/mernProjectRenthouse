const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

const errorMidleware = require("./middleware/error");

app.use(express.json())
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//Route imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const pickup = require("./routes/pickupRoute");
const order = require("./routes/orderRoute");

//API
app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",pickup);
app.use("/api/v1", order);

app.use(express.static(path.join(__dirname,"../frontend/build")));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });

//middleware for error
app.use(errorMidleware);



module.exports = app;