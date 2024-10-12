const { where } = require('sequelize');
const db = require('../sequelize/connector');
const contenucours = require('../models/suivrecours');

const Users = db.user
const SuivreCours = db.suivrecours
const Cours = db.cours

const addSuivreCours = async (req, res) => {
    try {
        const {code} = req.body;
        const cours = await Cours.findOne({where: {code:code}})
        if(cours){
            let info = {
                coursId_id: cours.id,
                userId_id: req.body.userId_id,
            }
            const contenucours = await SuivreCours.create(info)
            res.status(200).send({contenucours, message: true})
        }
    } catch (error) {
        res.status(500).send({ message: 'Erreur lors de la création du cours', error });
    }
}

const getAllCoursByIdCours = async (req, res)=>{
    let id = req.params.id
    const data = await SuivreCours.findAll({
        where: {userId_id : id},
        include: [
            {
                model: Users,
                as: 'suivreuser' 
            },
            {
                model: Cours,
                as: 'suivre'
            }
        ]
    })
    res.status(200).send(data)
}

module.exports = {
    addSuivreCours,
    getAllCoursByIdCours
}