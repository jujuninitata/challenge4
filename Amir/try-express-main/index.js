require('dotenv').config();

const { urlencoded } = require('express');
const express = require('express');
const path = require('path');
const app = express();
const { uploadMiddleware } = require('./helper/multer');
const Motor = require('./modules/motor'); //import file /modules/motor.js
const Uploads = require('./modules/upload');
// const db = require('./helper/db');

const publicDir = path.join(__dirname, "public")

const PORT = process.env.PORT || 8000;

const motor = new Motor(); // instantiate class Motor
// const motorV2 = new MotorV2();
const upload = new Uploads();

app.use(express.json()); // untuk membaca req.body dengan data berbentuk json
app.use(express.urlencoded({extended:true})); // untuk membaca req.body dengan data dalam bentuk form data

//endpoint static
app.use('/', express.static('public')); //serve index.html
app.use('/add', express.static(publicDir + '/add.html')); //serve index.html
app.use('/update/:id', express.static(publicDir + '/update.html'))
app.use('/bootstrap', express.static(path.join(__dirname, "node_modules/bootstrap/dist/"))) //serve bootstrap

app.post('/api/v1/uploads', uploadMiddleware, (...args) => upload.handleUpload(...args)) 

//endpoint API sql (query)
app.get('/api/v1/motors',  (...args) => motor.handleGetMotors(...args)); // get Motors (ambil semua data motor)
app.get('/api/v1/motors/:id', (...args) => motor.handleGetMotor(...args)); // get motor/:id (ambil data motor by id)
app.post('/api/v1/motors', (...args) => motor.handleCreateMotor(...args)); // post motor (menambahkan data motor)
app.put('/api/v1/motors/:id', (...args) => motor.handleUpdateMotor(...args)); // put motor/:id (mengedit data motor by id)
app.delete('/api/v1/motors/:id', (...args) => motor.handleDeleteMotor(...args)); // delete motor/:id (delete data motor by id)

//endpoint API sequelize
// app.get('/api/v2/motors',  (...args) => motor.handleGetMotors(...args)); // get Motors (ambil semua data motor)
// app.get('/api/v2/motors/:id', (...args) => motor.handleGetMotor(...args)); // get motor/:id (ambil data motor by id)
// app.post('/api/v2/motors', (...args) => motor.handleCreateMotor(...args)); // post motor (menambahkan data motor)
// app.put('/api/v2/motors/:id', (...args) => motor.handleUpdateMotor(...args)); // put motor/:id (mengedit data motor by id)
// app.delete('/api/v2/motors/:id', (...args) => motor.handleDeleteMotor(...args)); // delete motor/:id (delete data motor by id)

app.use((req, res) => {
    res.send("404 Not Found");
});
  
app.listen(PORT, () => {
    console.log(`Express Server Started at : http://localhost:${PORT}`);
});