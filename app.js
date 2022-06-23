const express = require('express')
const morgan = require('morgan')
const layout = require('./views/layout')
const { db, page, user } = require('./models');

const app = express()

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

app.use(morgan("dev"))
app.use(express.static(__dirname + "/public"))
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send(layout())
})

const PORT = 3000;

async function run(){
    await db.sync({force: true})
    
    app.listen(PORT, () => {
    console.log("hello")
    })
}

run()

