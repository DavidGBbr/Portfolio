import React from "react";
import ImgDeveloper from "../../assets/developer.png";
import * as C from "./styles";

export const Home = () => {
  return (
    <C.Container className="container">
      <C.AboutContainer>
        <h1>Olá, meu nome é David</h1>
        <p>Sou Desenvolvedor Front-end especializado em React</p>
        <C.LinkDownload
          href="https://drive.google.com/u/0/uc?id=1f9tmVKr5ziUxtZVGfQrZ485alkPnr9d3&export=download"
          download="curriculo.pdf"
          type="application/pdf"
        >
          <span>Meu Currículo</span>
          <C.LinkLogo />
        </C.LinkDownload>
      </C.AboutContainer>
      <C.DeveloperImg src={ImgDeveloper} alt="Developer image" />
    </C.Container>
  );
};
