const express = require("express");
const path = require('path'); //module path untuk akses file
const app = express();

// Ambil port dari environment variable
// Dengan nilai default 8000
const PORT = process.env.PORT || 8000;

// fungsi untuk handle route atau link '/about'
function handleGetAbout(req, res){
  res.sendFile(path.join(__dirname+'/about.html'));
}

function handleGetTest(req, res){
  //req.params, req.query, req.body
  res.send('NO : ' + req.params.id + ' mobil :' + req.params.mobil + 
  ' query :' + req.query.filter);
}

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/login", (req, res) => {
  res.send("Masoook!");
});

// routing ke fungsi yang sudah di tulis
app.get("/about", handleGetAbout);

/// /test/ <- link, /:id/:mobil <- parameter id dan mobil, filter, sort, search <- query
app.get("/test/:id/:mobil", handleGetTest);
// contoh: tokopedia.com/:toko/:barang

app.get("/login", (req, res) => {
  res.send("GET Masoook!");
});

app.use((req, res) => {
  res.send("Mau kemana bos?");
});

app.listen(PORT, () => {
  console.log(`Express nyala di http://localhost:${PORT}`);
});
