const express = require("express");
const {ambilsemua,tambahdata,ubahdata,CarisatuData, hapusdata} = require("../controllers/MobilControllers");
const routers = express.Router();

routers.post("/",tambahdata);
routers.put("/:idFromParams",ubahdata);
routers.get("/:idFromParams",CarisatuData);
routers.delete("/:idFromParams",hapusdata);
routers.get("/",ambilsemua);

module.exports =  routers;

