const express = require('express');
const path = require('path');


const app = express();

app.use(express.static(path.join(__dirname, "public")))

app.set("view engine", "ejs")
app.set("views", "views")

app.get("/", (req,res) => {
    res.render("index")
})

app.listen(8000, () => {
    console.log("Server Ready");
})