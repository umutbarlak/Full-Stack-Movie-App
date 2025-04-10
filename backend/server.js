const http = require("http");
const getRequest = require("./methods/get");
const postRequest = require("./methods/post");
const deleteRequest = require("./methods/delete");
const defaultRequest = require("./methods/default");
const optionsRequest = require("./methods/options");

const server = http.createServer((req, res) => {
  console.log("istek geldi", req.method);
  //gönderilecek cevaba içeriğğin tipini belirleme
  res.setHeader("Content-Type", "application/json");
  //kaynak paylaşımında hata yaşamamak için "CORS" hatası
  res.setHeader("Access-Control-Allow-Origin", "*");

  switch (req.method) {
    case "GET":
      return getRequest(req, res);
    case "POST":
      return postRequest(req, res);
    case "DELETE":
      return deleteRequest(req, res);
    case "OPTIONS":
      return optionsRequest(req, res);
    default:
      return defaultRequest(req, res);
  }
});

const port = 4090;

server.listen(port, () => {
  console.log(`Server ${port}'a gelen istekleri dinlemeye basladı`);
});
