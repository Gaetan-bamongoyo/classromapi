const db = require('../sequelize/connector')

const Users = db.user

const addUsers = async (req, res) => {
    const { email } = req.body;
    const check = await Users.findOne({ where: { email } });
    let info = {
        nom: req.body.nom,
        email: req.body.email,
        issuperuser: 1,
        motdepasse: req.body.motdepasse,
    }
    if (check) {
        res.status(401).send({ error: "Le compte existe deja" })
    } else {
        const user = await Users.create(info)
        res.status(200).send({ user, message: true })
    }
}

const verifyUser = async (req, res) => {
    const { email, motdepasse } = req.body;
    if (!email) {
        return res.status(400).send([])
    } else {
        try {
            const user = await Users.findOne({ where: { email, motdepasse } });
            if (user) {
                res.status(200).send({ user, message: true })
            } else {
                res.status(401).send({ error: "Utilisateur n'existe" })
            }
        } catch (error) {
            res.status(500).send({ error: "Erreur" })
        }
    }
}

const modifierInformation = async (req, res) => {
    let id = req.params.id
    const { code } = req.body;
    let info = {
        issuperuser: 0,
    }
    if (code == "2024UVIRA") {
        const user = await Users.update(info, { where: { id: id } })
        res.status(200).send({ user, message: true })
    }else{
        res.status(404).send({message: false})
    }
}

const getAll = async (req, res) => {
    const data = await Users.findAll({})
    res.status(200).send(data)
}

module.exports = {
    addUsers,
    verifyUser,
    getAll,
    modifierInformation
}