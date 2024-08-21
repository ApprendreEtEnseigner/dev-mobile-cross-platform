//! Pour recuperer les element HTML via leurs id respectifs
const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondesEl = document.getElementById("secondes");
const ampmEl = document.getElementById("ampm");

//! getData pour... recuperer les donnees de l'ordinateur
const getData = () => {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let ampm = "AM";

  //* Le ampmEl ne peut pas etre obtenu a partir de l'ordi, donc on va user la logique
  if (h >= 12) {
    h = h - 12;
    ampm = "PM";
  }

  return { h, m, s, ampm };
};

//! formatTime pour... gerer l'affichage de 0 ou non au niveau de l'heure, minute, seconde
const formatTime = ({ h, m, s, ampm }) => {
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  return { h, m, s, ampm };
};

//! displayTime Pour... remplacer le contenu des elements <strong></strong>, via l'attribut/propriete textContent
const displayTime = ({ h, m, s, ampm }) => {
  hourEl.textContent = h;
  minutesEl.textContent = m;
  secondesEl.textContent = s;
  ampmEl.textContent = ampm;
};

//! setInterval Pour... metre a jour periodiquement, displayTime sans avoir besoin de rappeler manuellement displayTime.
setInterval(() => {
  displayTime(formatTime(getData()));
}, 1000);
