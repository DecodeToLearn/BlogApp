const express = require("express");
const app = express();
const path = require("path");
// Set View engine global variable
app.set("view engine", "ejs");

// Include custome Route module
const userRoute = require("./routes/user");
const adminRoute = require("./routes/admin");

//Static Files Middleware
app.use("/libs", express.static(path.join(__dirname, "node_modules")));
app.use("/static", express.static(path.join(__dirname, "public")));

//Router Middleware
app.use("/admin",adminRoute);
app.use(userRoute);

app.listen(3000, function() {
    console.log("listening on port 3000");
});