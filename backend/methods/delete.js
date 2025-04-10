const fs = require("fs");

const deleteRequest = (req, res) => {
  //url in temel adresini değişkene aktar
  const path = req.url.substring(0, req.url.lastIndexOf("/"));
  //url in sonundaki id değişkene aktar
  const id = req.url.split("/")[3];

  if (path === "/api/movies" && id) {
    const data = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));

    const isFound = data.find((i) => i.id == id);

    if (!isFound) {
      res.writeHeader(404);
      return res.end("Gönderilen id'li eleman bulunamadı");
    }

    const filtered = data.filter((i) => i.id !== id);

    fs.writeFileSync("./data/movies.json", JSON.stringify(filtered));
    res.writeHeader(204);
    res.end();
  }
};

module.exports = deleteRequest;
