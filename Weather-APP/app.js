const express = require('express')
const app = express()

//Middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

//import router
const weatherRoute = require('./routes/weather')

//set view engine
app.set('view engine', 'ejs')

//middleware route
app.use('/', weatherRoute)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server starting at localhost:${port}`))
