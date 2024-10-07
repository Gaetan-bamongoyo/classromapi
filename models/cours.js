module.exports = (sequelize, DataTypes)=>{
    const Cours = sequelize.define("cours",{
        designation: {
            type: DataTypes.STRING
        },
        section: {
            type: DataTypes.STRING
        },
        salle: {
            type: DataTypes.STRING
        },
        matiere: {
            type: DataTypes.STRING
        },
        code: {
            type: DataTypes.STRING
        },
    })
    return Cours
}