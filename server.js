const http = require("http");
const fs = require("fs");


http.createServer((request, response) => {
 fs.readFile("index.html", (error, data) => response.end(data));

})
  

.listen(5500, () => { console.log("Сервер запущен по адресу http://localhost:5500");
console.log ("Номер порта 5500")});
