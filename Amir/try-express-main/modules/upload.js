const { cloudinaryConfig, uploader } = require('../helper/cloudinary')
const { dataUri } = require('../helper/multer')

class Uploads{
    handleUpload(req, res){
        const file = dataUri(req);
        let url = ''
        uploader.upload(file, (err, result) => {
            if(err){
                // console.log(err)
                throw new Error('Gagal Upload!');
            }

            res.status(200)
                .json({
                    message: "image uploaded!",
                    data: result.url
                })

        }).catch((err) => 
            res.status(400)
                .json({
                    message: 'someting went wrong while processing your request',
                    data: {err}
                })
        );
    }
}

module.exports = Uploads;