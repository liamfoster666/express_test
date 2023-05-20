const express = require("express");
const http = require('http');

const router = express.Router();
const PORT = process.env.PORT || 1337;

const interval = process.env.INTERVAL || 600 //10 Minutes

router.get("/", (req, res) => {
  res.send("Ping response: OK");
});

setInterval(() => {
    http.get(`http://localhost:${PORT}/ping`, (resp) => {
        console.log(`Ping: http://localhost:${PORT}/ping, Status: `, resp.statusCode);
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}, interval*1000);

module.exports = router;