const http = require("http");
const fs = require("fs");
const express = require('express');
const app = express();


app.use('/style', express.static(`public`));

http.createServer((request, response) => {
 fs.readFile("index.html", (error, data) => response.end(data));

})

let JSON = {
    Type: get1,
                Age: get2,
                poliv:get3,
                gorsh:get4

    };
    response.send(JSON);
    

.listen(5500, () => { console.log("Сервер запущен по адресу http://localhost:5500");
console.log ("Номер порта 5500")});
