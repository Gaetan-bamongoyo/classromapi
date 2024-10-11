// const { FOREIGNKEYS } = require('sequelize/lib/query-types');
const dbConfig = require('../conf/db.js');

const {Sequelize, DataTypes} = require('sequelize');

// const sequelize = new Sequelize(
//     dbConfig.DB,
//     dbConfig.USER,
//     dbConfig.PASSWORD, {
//         host: dbConfig.HOST,
//         dialect: dbConfig.dialect,
//         operatorsAliases: false,

//         pool: {
//             max: dbConfig.pool.max,
//             min: dbConfig.pool.min,
//             acquire: dbConfig.pool.acquire,
//             idle: dbConfig.pool.idle,
//         }
//     }

// )
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect
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

db.sequelize.sync({ force: false })
.then(()=>{
    console.log('yes re-sync done...')
})

module.exports = db