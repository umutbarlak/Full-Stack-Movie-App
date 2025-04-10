const optionsRequest = (req, res) => {
  //frontend den bir putipost,patch,delete isteği atıldığında tarayıcı öncelikle server a bu istek tiplerini kabul etmek amacıyla options htttp metodunyla istek atar.
  // Eğer options isteğine cevap vermezsek api diğer istekleri kabul etmiyor.
  //options istei geldiğinde doğru header ler cevap gönderirsek options ın arkasından asıl isteği atıyor

  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE , OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.end();
};

module.exports = optionsRequest;
