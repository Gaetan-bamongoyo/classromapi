module.exports = (sequelize, DataTypes)=>{
    const Remettre = sequelize.define("remettre",{
        fichier: {
            type: DataTypes.STRING
        }
    })
    return Remettre
}