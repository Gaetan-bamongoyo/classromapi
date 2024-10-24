const { where } = require('sequelize');
const db = require('../sequelize/connector')
const multer = require('multer')

const Users = db.user
const Remettre = db.remettre

const addRemettre = async (req, res) => {
    try {
        let info = {
            fichier: req.file.path,
            devoir_id: req.body.devoir_id,
            user_id: req.body.user_id,
        }
        const data = await Remettre.create(info)
        res.status(200).send({data, message: true})
    } catch (error) {
        res.status(500).send({ message: 'Erreur lors de la création du cours', error });
    }
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
  })

const upload = multer({
    storage: storage,
    // limits: { fileSize: '100000' },
    // fileFilter: (req, file, cb) => {
    //     const fileTypes = /pdf/
    //     const mimeType = fileTypes.test(file.mimetype)
    //     const extname = fileTypes.test(path.extname(file.originalname))

    //     if(mimeType && extname){
    //         return cb(null, true)
    //     }
    //     cb('Give proper files')
    // }
}).single('fichier')

module.exports = {
    addRemettre,
    upload
}

