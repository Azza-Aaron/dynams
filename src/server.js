const path = require('path');
const countDown = require('./util/countdown');

const express = require("express")
const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.get('/countdown', (req, res) => {
    console.log("countdown")
    const callCount = countDown.yearsMonthsDaysHoursMinutes()
     //res.send(`Hi`)
    res.render("index", {countdown: callCount})
})

app.get('/weather', (req, res) => {
    console.log("weather")
    const callCount = countDown.yearsMonthsDaysHoursMinutes()
    //res.send(`Hi`)
    res.render("index", {countdown: callCount})
})

app.use(express.static('./src/public'));

app.listen(3000)