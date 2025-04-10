const bodyParser = require("../utils/bodyParser");
const crypto = require("crypto");
const fs = require("fs");

const postRequest = async (req, res) => {
  if (req.url === "/api/movies") {
    const body = await bodyParser(req);
    // todo gelen veriyi kontrol et
    console.log(body);

    const keys = [
      "title",
      "year",
      "rating",
      "director",
      "language",
      "description",
    ];

    if (
      keys.some((key) => !body[key]) ||
      !body.cast.length > 0 ||
      !body.genre.length > 0
    ) {
      res.writeHeader(404);
      return res.end("Lütfen bütün alanları doldurunuz");
    }

    // kaydedilecek filme id ekle
    body.id = crypto.randomUUID();
    //json verilerini al
    let data = fs.readFileSync("./data/movies.json", "utf-8");
    data = JSON.parse(data);
    //mevcut filmler üzerine yeni filmi ekle
    data.push(body);
    //json dosyasını güncelle
    fs.writeFileSync("./data/movies.json", JSON.stringify(data));

    res.writeHeader(201);
    return res.end(JSON.stringify(body));
  } else {
    res.writeHeader(404);
    res.end("Geçresiz yola istek atıldı");
  }
  res.end("Post isteği algilandi");
};

module.exports = postRequest;
