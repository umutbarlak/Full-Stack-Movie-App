export const inputs = [
  { name: "title", label: "Başlık", type: "text" },
  { name: "description", label: "Açıklama", type: "text" },
  { name: "rating", label: "Puan", type: "number", min: 1, max: 10 },
  { name: "year", label: "Yıl", type: "number", min: 1800, max: 2100 },
  { name: "director", label: "Yapımcı", type: "text" },
  { name: "duration", label: "Süre", type: "number" },
  { name: "language", label: "Dil", type: "text" },
  { name: "cast", label: "Ekip ( , ile ayırınız)", type: "text" },
  { name: "genre", label: "Kategoriler ( , ile ayırınız)", type: "text" },
];

export const findColor = (rating) => {
  const r = +rating;
  const color =
    r > 9
      ? "#2a8ae9"
      : r > 7.5
      ? "#2ae96d"
      : r > 5
      ? "orange"
      : r > 3
      ? "#bab21a"
      : "red";

  return color;
};
