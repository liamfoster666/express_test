const express = require("express");
const http = require('http');

const router = express.Router();
const PORT = process.env.PORT || 1337;

const interval = 600 //10 Minutes
console.log(`User Interval : ${interval/60}`)

router.get("/", (req, res) => {
  res.send("Ping response: OK");
});

setInterval(() => {
    http.get(`http://localhost:${PORT}/ping`, (resp) => {
        console.log('Ping response status:', resp.statusCode);
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}, interval*1000);

module.exports = router;