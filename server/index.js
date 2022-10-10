const http = require ("http");
const fs = require("fs"); //untuk file system membaca,membuat file
const path = require("path");//untuk membaca path file
const express= require ("express");//untuk module static file dengan sebelumnya install yarn add express


/*baca file static seperti css, javascript dengsn install external module
menggunakan yarn add express untuk remove menggunakan --> yarn remove namamodules
*/
    const appexpress = express();
    //bacafilestatic untuk css, js dan image
    appexpress.use(express.static(path.join(__dirname,"../public")))
    //bacafilestatic untuk css, js dan image
//baca file static
//create server

    // const  server = http.createServer((req,res) =>
    // {
    //     //baca file indexhtml
    //         const halamanUtama = path.join(__dirname, "../public/index.html")
    //         const BacaFileHTML= fs.readFileSync(halamanUtama,"utf-8")
    //         res.end(BacaFileHTML) 
    //     //baca file indexhtml
    // })
 

    //cara2
    // http
    //     createServer((req,res) =>
    //     {
    //         res.end(`coba test halaman server`)
    //     })
    //     .listen(8000, () =>{
    //         console.log(`server running on port ${8000}`);
    //     });
    // //cara2
    
//create server

if (appexpress.get("/", (req,res) => 
{
    //untuk halaman index
    const fileLoc = path.join(__dirname,"../public/index.html");
    const readFile = fs.readFileSync(fileLoc,"utf-8");
    res.send(readFile)
    //untuk halaman index

}))
if (appexpress.get("/cari", (req,res) => 
{
    //untuk halaman index
    const fileLoc = path.join(__dirname,"../public/carimobil.html");
    const readFile = fs.readFileSync(fileLoc,"utf-8");
    res.send(readFile)
    //untuk halaman index

}))
    appexpress.listen(9000, () =>{
    console.log(`server running on port ${9000}`);
});