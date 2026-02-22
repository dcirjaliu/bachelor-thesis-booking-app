import imgBUPT from "../images/BUPT.jpg";
import imgBaza2 from "../images/Baza2.jpg";
import imgCampus from "../images/Campus.jpg";

export const services = [
  {
    key: 1,
    title: "Spații de studiu",
    description:
      "Rezervă-ți unul dintre spațiile dedicate studiului din cadrul Bibliotecii UPT.",
    image: imgBUPT,
    link: "/serviceDetails/1",
  },
  {
    key: 2,
    title: "Baze sportive",
    description:
      "Fă o rezervare la terenurile de sport sau sălile de sport din cadrul Bazei 2 UPT.",
    image: imgBaza2,
    link: "/serviceDetails/2",
  },
  {
    key: 3,
    title: "Servicii Campus",
    description:
      "Rezervă-ți unul dintre intervalele orare disponibile la spălătoriile din cămine.",
    image: imgCampus,
    link: "/serviceDetails/3",
  },
];
