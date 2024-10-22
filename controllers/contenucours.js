const { where } = require('sequelize');
const db = require('../sequelize/connector');

const CountenuCours = db.contenucours
const Cours = db.cours

const addContenuCours = async (req, res) => {
    try { 
        let info = {
            annonce: req.body.annonce,
            file: req.body.file,
            cours_id: req.body.cours_id,
        }
        const contenucours = await CountenuCours.create(info)
        res.status(200).send({ contenucours, message: true })
    } catch (error) {
        res.status(500).send({ message: 'Erreur lors de la création du cours', error });
    }
}

const getAllCoursByIdCours = async (req, res) => {
    let id = req.params.id
    const data = await CountenuCours.findAll({
        where: { cours_id: id }
    })
    res.status(200).send(data)
}


module.exports = {
    addContenuCours,
    getAllCoursByIdCours
}