module.exports = (sequelize, DataTypes)=>{
    const Contenu = sequelize.define("contenucours",{
        annonce: {
            type: DataTypes.STRING
        },
        file: {
            type: DataTypes.TEXT('long')
        }
    })
    return Contenu
}