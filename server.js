const express = require('express')
const cors = require('cors')

const app = express()

var corOption = {
    origin: 'https://localhost:8081'
}

app.use(cors(corOption))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// route
const routeruser = require('./routes/user')
const routercours = require('./routes/cours')
const routercontenucours = require('./routes/contenucours')
const routersuivrecours = require('./routes/suivre')
const routerdevoirs = require('./routes/devoirs')
const routerremettre = require('./routes/remettre')
// 
app.use('/classrom/user', routeruser)
app.use('/classrom/cours', routercours)
app.use('/classrom/contenu', routercontenucours)
app.use('/classrom/suivre', routersuivrecours)
app.use('/classrom/devoir', routerdevoirs)
app.use('/classrom/remettre', routerremettre)


// test api
app.get('/', (req, res) => {
    res.json({ message: 'hello from api' })
})

// port
const PORT = process.env.PORT || 8080

// server
app.listen(PORT, () => {
    console.log('server is running on port')
})