// const { FOREIGNKEYS } = require('sequelize/lib/query-types');
const dbConfig = require('../conf/db.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB, 
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host: dbConfig.HOST,
        port: dbConfig.PORT,
        dialect: dbConfig.dialect,

        // pool: {
        //     max: dbConfig.pool.max,
        //     min: dbConfig.pool.min,
        //     acquire: dbConfig.pool.acquire,
        //     idle: dbConfig.pool.idle
        // }
    }
)

sequelize.authenticate()
.then(()=>{
    console.log('connected...')
})
.catch(err =>{
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require('../models/user.js')(sequelize, DataTypes)
db.cours = require('../models/cours.js')(sequelize, DataTypes)
db.contenucours = require('../models/contenucours.js')(sequelize, DataTypes)
db.suivrecours = require('../models/suivrecours.js')(sequelize, DataTypes)

db.user.hasMany(db.cours, {
    foreignKey: 'user_id',
    as: 'cours'
})
db.cours.belongsTo(db.user, {
    foreignKey: 'user_id',
    as: 'users'
})

db.cours.hasMany(db.contenucours, {
    foreignKey: 'cours_id',
    as: 'coutenus'
})
db.contenucours.belongsTo(db.cours, {
    foreignKey: 'cours_id',
    as: 'cours'
})

db.cours.hasMany(db.suivrecours,{
    foreignKey: 'coursId_id',
    as: 'cours'
})
db.suivrecours.belongsTo(db.cours,{
    foreignKey: 'coursId_id',
    as: 'suivre'
})

db.user.hasMany(db.suivrecours,{
    foreignKey: 'userId_id',
    as: 'users'
})
db.suivrecours.belongsTo(db.user,{
    foreignKey: 'userId_id',
    as: 'suivreuser'
})

db.sequelize.sync({ force: false })
.then(()=>{
    console.log('yes re-sync done...')
})

module.exports = db