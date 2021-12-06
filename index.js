// Required External Modules

const express = require("express");
const path = require("path");


// App Variables
const app = express();
const port = process.env.PORT || "8000";

// App configuration
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

// Routes Definition
app.get("/", (req, res) => {
    // res.status(200).send("CodeLego: Food For Thought!")
    res.render("index", {title: "Home"});
});

app.get("/user", (req, res) => {
    res.render("user", {title: "Profile", userProfile: {nickname: "Partner"}});
});

// Server Activation
app.listen(port, ()=> {
    console.log(`Listening to requests on http://localhost:${port}`)
});

