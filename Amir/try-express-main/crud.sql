-- CRUD mengunakan query

-- tambah dengan memilih kolom
-- INSERT INTO <nama table> (pilih kolom yang mau di isi) VALUES (data berdasarkan kolom)
INSERT INTO motor (nama, transmisi, manufaktur, tgl_pembuatan, harga_sewa, created_by) 
	VALUES ("KLX 150", "KAWASAKI", "MANUAL", "2022-10-13", 150000, "admin");

-- tambah data tanpa memilih kolom
-- INSERT INTO <nama table> VALUES (data sesuai urutan kolom & jumlah kolom) 
-- now() fungsi sql untuk mengambil value tanggal dan jam sekarang
INSERT INTO motor VALUES (NULL,"R1","YAMAHA","MANUAL","2022-10-13",NULL,50000,"ADMIN", now(), NULL, NULL)

-- ambil data dengan memilih kolom
-- SELECT <nama kolom> FROM <nama table>;
SELECT nama, tgl_pembuatan, manufaktur FROM motor; -- READ

-- ambil data dengan menampilkan semua kolom
-- SELECT * FROM <nama table>;
SELECT * FROM motor;

-- update / edit data by id
-- UPDATE table_name
-- SET column1 = value1, column2 = value2, ...
-- WHERE condition; 
UPDATE motor SET nama="R15" where id = 3;

-- update / edit data by manufaktur 
-- UPDATE table_name
-- SET column1 = value1, column2 = value2, ...
-- WHERE condition; 
UPDATE motor SET manufaktur="YAMAHA", transmisi="MANUAL", updated_by = 'admin'
	where manufaktur = "MANUAL" AND transmisi = "YAMAHA";

-- delete data by 1
-- DELETE FROM table_name WHERE condition;
DELETE FROM motor WHERE id=1;

-- delete data by manufaktur 
-- tidak case sensitive 
-- DELETE FROM table_name WHERE condition;
DELETE FROM motor WHERE manufaktur="yamaha";