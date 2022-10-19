const db = require("./../models");

//fucntion menampilkan semua data
const ambilsemua =async(req, res) =>
{
    try {
         const AllDataMobil = await db.Car.findAll();
          return res.json({message: "all data Mobil",data: AllDataMobil})
        }
        catch (err){
            console.log("request failed")
            return res.status(500).json({message:"fail!"})
        }
}
//fucntion menampilkan semua data

const CarisatuData  = async (req, res) =>
{
    const {idFromParams} =req.params;
    const ResponseCariSatu = await db.Car.findOne ( {where:{id:idFromParams}});
    return res.status(500).json({message:"get data SuccessFully!", data : ResponseCariSatu})
}

const hapusdata  = async (req, res) =>
{
    const {idFromParams} =req.params;
    const  ResponseHapus = await db.Car.destroy ( {where:{id:idFromParams}});
    return res.status(500).json({message:"Delete data SuccessFully!", data : ResponseHapus})
}
// function menambah data
const tambahdata =async(req, res) =>
{ 
    const {nama, size,harga ,foto} = req.body;
    const ResposeTambah = await db.Car.create({ nama, size, harga, foto});
    return res.json({message: "data succcessfully added",data: ResposeTambah})
}

const ubahdata =async(req, res) =>
{
    const {nama, size,harga ,foto} = req.body;
    const {idFromParams} =req.params;
    const responseubah = await db.Car.update({nama,size, harga, foto},{
        where:{id:idFromParams}})
        return res.json({message: "data update succcessfully ",data: responseubah})
}
 
module.exports ={ tambahdata, ambilsemua, ubahdata,CarisatuData, hapusdata };
// function menambah data


