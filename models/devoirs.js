module.exports = (sequelize, DataTypes)=>{
    const Devoir = sequelize.define("devoir",{
        annonce: {
            type: DataTypes.STRING
        },
        contenu: {
            type: DataTypes.TEXT('long')
        }
    })
    return Devoir
}