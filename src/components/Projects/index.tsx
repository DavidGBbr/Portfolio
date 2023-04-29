import React from "react";
import * as C from "./styles";
import ImgGelateria from "../../assets/gelateria.jpg";
import ImgFinance from "../../assets/finance.jpg";
import ImgDogs from "../../assets/dogs.jpg";

export const Projects = () => {
  return (
    <section className="container">
      <C.Title>Meus Projetos</C.Title>
      <p>Alguns dos meus principais projetos</p>
      <C.ContainerProjects>
        <C.CardProjetct>
          <img src={ImgGelateria} alt="Sorveteria Artesanal" />
          <h3>Gelateria Artesanal</h3>
          <p>
            Página de uma sorveteria artesanal feita em React sendo 100%
            responsiva
          </p>
          <div>
            <a href="">Meu Código</a>
            <a href="">Veja meu projeto</a>
          </div>
        </C.CardProjetct>

        <C.CardProjetct>
          <img src={ImgDogs} alt="Rede Social Dogs" />
          <h3>Dogs</h3>
          <p>
            Rede social de cachorros criada com TypeScript e react, utilizando
            uma API externa juntamente com uma biblioteca de gráficos
          </p>
          <div>
            <a href="">Meu Código</a>
            <a href="">Veja meu projeto</a>
          </div>
        </C.CardProjetct>

        <C.CardProjetct>
          <img src={ImgFinance} alt="Sistema de Gestão Financeira" />
          <h3>Finance Controller</h3>
          <p>
            Sistema de Gestão financeira criado com React, react-icons e
            styled-components. Nele também foi implementado o uso de estados
            globais utilizando Context Api
          </p>
          <div>
            <a href="">Meu Código</a>
            <a href="">Veja meu projeto</a>
          </div>
        </C.CardProjetct>
      </C.ContainerProjects>
    </section>
  );
};
