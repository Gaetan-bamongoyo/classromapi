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

const getRemettreAllByDevoirs = async (req, res) => {
    let id = req.params.id
    const data = await Remettre.findAll({
        where: { devoir_id: id },
        include: [
            {
                model: Users,
                as: 'users'
            }
        ]
    })
    res.status(200).send(data)
}

const getRemettreByDevoirsId = async (req, res)=>{
    const { devoir_id, user_id } = req.body;
    const data = await Remettre.findAll({
        where: { devoir_id, user_id },
        include: [
            {
                model: Users,
                as: 'users'
            }
        ]
    })
    res.status(200).send(data)
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
}).single('fichier')

module.exports = {
    addRemettre,
    upload,
    getRemettreByDevoirsId,
    getRemettreAllByDevoirs
}

