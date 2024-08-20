//! Pour recuperer les element HTML via leurs id respectifs
const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondesEl = document.getElementById("secondes");
const ampmEl = document.getElementById("ampm");

//! getData... pour recuperer les donnees de l'ordinateur
const getData = () => {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  //* Le ampmEl ne peut pas etre obtenu a partir de l'ordi, donc on va user la logique
  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  return { h, m, s, ampm };
};

//! formatTime pour... gerer l'affichage de 0 ou non au niveau de l'heure
const formatTime = ({ h, m, s, ampm }) => {
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  return { h, m, s };
};
formatTime(getData());

//! Pour remplacer le contenu des elements <strong></strong>, via l'attribut/propriete innerText...
const displayTime = ({ h, m, s, ampm }) => {
  hourEl.innerText = h;
  minutesEl.innerText = m;
  secondesEl.innerText = s;
  ampmEl.innerText = ampm;
  setTimeout(() => {
    displayTime(getData());
  }, 1000);
};

displayTime(getData());
