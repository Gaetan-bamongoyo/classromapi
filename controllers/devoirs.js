const { where } = require('sequelize');
const db = require('../sequelize/connector')

const Users = db.user
const Devoirs = db.devoir

const addDevoir = async (req, res) => {
    try {
        let info = {
            annonce: req.body.annonce,
            contenu: req.body.contenu,
            coursId_id: req.body.coursId_id,
            userId_id: req.body.userId_id,
        }
        const devoirs = await Devoirs.create(info)
        res.status(200).send({devoirs, message: true})
    } catch (error) {
        res.status(500).send({ message: 'Erreur lors de la création du cours', error });
    }
}

module.exports = {
    addDevoir,
}