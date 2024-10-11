module.exports = (sequelize, DataTypes)=>{
    const Cours = sequelize.define("contenucours",{
        annonce: {
            type: DataTypes.STRING
        },
        file: {
            type: DataTypes.TEXT
        }
    })
    return Cours
}