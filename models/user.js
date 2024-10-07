module.exports = (sequelize, DataTypes)=>{
    const Users = sequelize.define("users",{
        nom: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        motdepasse: {
            type: DataTypes.STRING
        },
        issuperuser: {
            type: DataTypes.INTEGER
        },
    })

    return Users
}