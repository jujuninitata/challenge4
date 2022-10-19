// const express = require("express")
// const app = express();
// const MobilRoutes = require("./routes/MobilRoutes")
const express = require("express");
const app = express();
const CarRoutes = require("./routes/MobilRoutes");
const db = require("./models");
const path = require("path");//untuk membaca path file

app.use(express.static(path.join(__dirname,"./views/partial/")))

app.set("view engine","ejs");
app.use(express.json());

app.use("/api/v1/cars", CarRoutes)

//routing
app.get("/", async(req,res) => {
    const data = await db.Car.findAll();
    res.render("index", {data});
    //console.log(AllDataMobil)
   // res.render("index", {name:"avanza"});
})
app.get("/tambah", (req,res) => {
    res.render("tambahmobil")
})
app.get("/ubah", (req,res) => {
    res.render("ubahmobil")
})

app.listen(9000,() => {
    console.log('server running on port 9000')
});