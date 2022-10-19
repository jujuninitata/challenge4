// folder modules/motor.js
const db = require('../helper/db');
class Motor{
    constructor(){
    } 

    handleGetMotors(req, res){
        db.query(
            'SELECT * FROM `motor`',
            function(err, results, fields) {
              console.log(results); // results contains rows returned by server
              res.json(results)
            }
        );
        
    }

    handleGetMotor(req, res){
        // const motor = this.#motors.find(el => el.id == req.params.id);
        db.query(
            'SELECT * FROM `motor` where id=?',
            [req.params.id],
            function(err, results, fields) {
              console.log(results); // results contains rows returned by server
              res.json(results)
            }
        );
    }

    // karena menggunakan method selain GET harus di coba di postman
    handleCreateMotor(req, res){
        // 'INSERT INTO (nama, manufaktur, tgl_pembuatan) VALUES (?,?,?)'
        // [req.body.nama, req.body.manufaktur, req.body.tgl_pembuatan]
        db.query(
            `INSERT INTO motor (nama, transmisi, manufaktur, tgl_pembuatan, foto, harga_sewa, created_by) 
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [req.body.nama, req.body.transmisi, req.body.manufaktur, req.body.tgl_pembuatan, req.body.foto, req.body.harga_sewa, 'admin'],
            function(err, results, fields) {
              console.log(err, results); // results contains rows returned by server
              res.json('Data Ditambahkan!')
            }
        );
    }

    // karena menggunakan method selain GET harus di coba di postman
    handleUpdateMotor(req, res){
        // menggunakan req.params.id & req.body
        db.query(
            `UPDATE motor SET nama=?, transmisi=?, manufaktur=?, tgl_pembuatan=?, foto=?, harga_sewa=?, updated_by=? where id=?`,
            [req.body.nama, req.body.transmisi, req.body.manufaktur, req.body.tgl_pembuatan, req.body.foto, req.body.harga_sewa, 'admin', req.params.id],
            function(err, results, fields) {
              console.log(results); // results contains rows returned by server
              res.json('Data Updated!')
            }
        );
    }

    // karena menggunakan method selain GET harus di coba di postman
    handleDeleteMotor(req, res){
        // const index = this.#motors.findIndex(el => el.id == req.params.id);
        // this.#motors.splice(index, 1)
        // console.log(this.#motors);
        db.query(
            'DELETE FROM `motor` where id=?',
            [req.params.id],
            function(err, results, fields) {
              console.log(results); // results contains rows returned by server
              res.json('Data Deleted!');
            }
        );
    }

}

module.exports = Motor;