const { where } = require('sequelize');
const db = require('../sequelize/connector')

const Users = db.user
const Cours = db.cours

// Fonction pour générer un code aléatoire de 4 caractères
function generateRandomCode(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < length; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

const addCours = async (req, res) => {
    try {
        let info = {
            designation: req.body.designation,
            section: req.body.section,
            salle: req.body.salle,
            matiere: req.body.matiere,
            code: generateRandomCode(4),
            user_id: req.body.user_id,
        }
        const cours = await Cours.create(info)
        res.status(200).send(cours)
    } catch (error) {
        res.status(500).send({ message: 'Erreur lors de la création du cours', error });
    }
}

const getAllCoursByIdUser = async (req, res)=>{
    let id = req.params.id
    const data = await Cours.findAll({
        where: {user_id : id},
        include: [
            {
                model: Users,
                as: 'users'
            }
        ]
    })
    res.status(200).send(data)
}

const getOnlyCoursById = async(req, res)=>{
    let id = req.params.id
    const data = await Cours.findOne({
        where: {id : id},
        include: [
            {
                model: Users,
                as: 'users'
            }
        ]
    })
    res.status(200).send(data)
}

module.exports = {
    addCours,
    getAllCoursByIdUser,
    getOnlyCoursById
}
