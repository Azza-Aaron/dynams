const express = require('express')
const app = express()

app.get("/dynamicCountdown", (req, res) => {
    res.send("Dynamic Countdown")
})

app.get("/dynamicWeather", (req, res) => {
    res.send("Dynamic Weather")
})
