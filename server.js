var express = require("express")
var app = express()
var dns = require("dns")

app.use(express.json())

var server = app.listen(8080, (req, res) => {
    var host = server.address().address
    var port = server.address().port
    console.log("m2 api successfully running on host: %s and port %s", host, port)
})

app.get("/", (req, res) => {
    res.send("m2 node js api")
})

app.get("/address", (req, res) => {
    dns.lookup(require('os').hostname(), function (err, add, fam) {
        res.send("ip address: " + add)
      })
})
app.get("/time", (req, res) => {
    var date_time = new Date();
    let hours = date_time.getHours();
    let minutes = date_time.getMinutes();
    let seconds = date_time.getSeconds();
    res.send("Current local time: " + hours + ":" + minutes + ":" + seconds)
})
app.get("/name", (req, res) => {
    res.send("Justin Cho")
})