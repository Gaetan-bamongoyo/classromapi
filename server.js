const express = require('express')
const cors = require('cors')
// const sequelize = require('./sequelize/connector')

// sequelize.sync().then(()=> console.log('logging'))

const app = express()

var corOption = {
    origin: 'https://localhost:8081'
}

app.use(cors(corOption))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// route
const routeruser  = require('./routes/user')
const routercours  = require('./routes/cours')
// 
app.use('/classrom/user', routeruser)
app.use('/classrom/cours', routercours)

// test api
app.get('/', (req, res)=>{
    res.json({ message: 'hello from api' })
})

// port
const PORT = process.env.PORT || 8080

// server
app.listen(PORT, ()=>{
    console.log('server is running on port')
})