import React, { useState } from "react";
import * as C from "./styles";
import ImgGelateria from "../../assets/gelateria.jpg";
import ImgFinance from "../../assets/finance.jpg";
import ImgDogs from "../../assets/dogs.jpg";

export const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: ImgGelateria,
      title: "Gelateria Artesanal",
      description:
        "Página de uma sorveteria artesanal feita em React sendo 100% responsiva",
      codeUrl: "https://github.com/DavidGBbr/Gelateria",
      projectUrl: "https://gelateria-alpha.vercel.app/",
    },
    {
      image: ImgDogs,
      title: "Dogs",
      description:
        "Rede social de cachorros criada com TypeScript e react, utilizando uma API externa juntamente com uma biblioteca de gráficos",
      codeUrl: "https://github.com/DavidGBbr/Dogs",
      projectUrl: "https://dogs-navy.vercel.app/",
    },
    {
      image: ImgFinance,
      title: "Finance Controller",
      description:
        "Sistema de Gestão financeira criado com React, react-icons e styled-components. Nele também foi implementado o uso de estados globais utilizando Context Api",
      codeUrl: "https://github.com/DavidGBbr/Sistema-de-gestao-financeira",
      projectUrl: "https://finance-controller.vercel.app/",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <section className="container">
      <C.Title>Meus Projetos</C.Title>
      <p>Alguns dos meus principais projetos</p>
      <C.ContainerProjects>
        <C.Button onClick={prevSlide}>&#10094;</C.Button>

        <C.CardProjetct>
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
          />
          <div className="aboutProject">
            <h3>{slides[currentSlide].title}</h3>
            <p>{slides[currentSlide].description}</p>
          </div>
          <div className="dataProject">
            <a href={slides[currentSlide].codeUrl}>Meu Código</a>
            <a href={slides[currentSlide].projectUrl}>Veja meu projeto</a>
          </div>
        </C.CardProjetct>

        <C.Button onClick={nextSlide}>&#10095;</C.Button>
      </C.ContainerProjects>
    </section>
  );
};
