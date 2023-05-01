import React from "react";
import * as C from "./styles";
import IconHTML from "../../assets/html.svg";
import IconCSS from "../../assets/css.svg";
import IconJS from "../../assets/javascript.svg";
import IconTS from "../../assets/typescript.svg";
import IconSASS from "../../assets/sass.svg";
import IconREACT from "../../assets/react.svg";
import IconNODE from "../../assets/node.svg";

export const About = () => {
  return (
    <C.Container className="container animeLeft">
      <h1 className="title">Sobre Mim</h1>
      <p>
        Sou desenvolvedor Front-end, com mais de 2 anos de experiência em
        tecnologias de ponta. Venho trabalhando em diversos projetos que me
        permitem dia após dia aprimorar minhas habilidades na construção e
        manutenção de softwares escaláveis e de alto desempenho.
      </p>
      <h1 className="title">Tecnologias</h1>
      <p>
        Minha especialidade é o desenvolvimento de interfaces utilizando as
        seguintes tecnologias de ponta
      </p>

      <C.ContainerTech>
        <img src={IconHTML} alt="HTML Icon" />
        <img src={IconCSS} alt="CSS Icon" />
        <img src={IconJS} alt="JavaScript Icon" />
        <img src={IconREACT} alt="React Icon" />
        <img src={IconSASS} alt="SASS Icon" />
        <img src={IconTS} alt="TypeScript Icon" />
        <img src={IconNODE} alt="Node Icon" />
      </C.ContainerTech>
    </C.Container>
  );
};
