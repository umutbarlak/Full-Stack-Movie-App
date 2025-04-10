const defaultRequest = (req, res) => {
  // cevabın durum kodunu belirle
  res.statusCode = 404;
  //cevabın içeriğini belirle
  res.write(JSON.stringify({ message: "İstek hatası olustu" }));
  return res.end();
};

module.exports = defaultRequest;
