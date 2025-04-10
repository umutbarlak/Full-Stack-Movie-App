const fs = require("fs");

const getRequest = (req, res) => {
  // const parsedURL = url.parse(req.url, true);
  //url in temel adresini değişkene aktar
  const path = req.url.slice(0, 11);
  //url in sonundaki id değişkene aktar
  const id = req.url.split("/")[3];

  //const param = req.url.split("=").pop().toLowerCase().trim();
  const param = decodeURIComponent(
    req.url.split("=").pop().toLowerCase().trim()
  );

  if (path === "/api/movies" && id) {
    const data = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));

    const movie = data.find((i) => i.id === id);

    if (movie) {
      return res.end(JSON.stringify(movie));
    }

    res.writeHeader(404);
    return res.end(JSON.stringify({ message: "Aranılan film bulunamadı" }));
  }

  if (path === "/api/movies") {
    //json dosyasınındaki filmleri al
    const movies = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));

    if (param && param !== "/api/movies") {
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(param)
      );
      return res.end(JSON.stringify(filtered));
    } else {
      return res.end(JSON.stringify(movies));
    }
  }

  res.writeHeader(404);
  res.end("Yol bulunamadı");
};

module.exports = getRequest;
