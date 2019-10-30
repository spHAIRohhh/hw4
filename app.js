const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.engine('html', require('ejs').renderFile);
app.use(express.static("public")); //folder for images, css, js

//routes
app.get("/", function(req, res){

    //res.send("it works!");
    res.render("index.ejs");
});

app.get("/history", function(req,res){
    //res.send("This will be Mercury web page!");
    res.render("history.ejs");
    
});

app.get("/networking", function(req,res){
    //res.send("This will be Venus web page!");
    res.render("networking.ejs");
});

app.get("/security", function(req,res){
    //res.send("This will be Venus web page!");
    res.render("security.ejs");
});

app.get("/future", function(req,res){
    //res.send("This will be Mars web page!");
    res.render("future.ejs");
});

//starting server
app.listen(process.env.PORT, process.env.IP, function(){
console.log("Express server is running...");
});