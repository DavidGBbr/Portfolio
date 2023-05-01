import React, { FormEvent, useState } from "react";
import * as C from "./styles";
import emailJs from "@emailjs/browser";
import ImgHandshake from "../../assets/handshake.png";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e: FormEvent) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };

    emailJs
      .send(
        "service_lgvmjct",
        "template_jnt7c4r",
        templateParams,
        "uMWO54vAAZ_Uo3bzK"
      )
      .then(
        (response) => {
          console.log("Email Enviado", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log(`Erro: ${err}`);
        }
      );
  }

  return (
    <section className="container">
      <h1 className="title">Contate-me</h1>

      <C.Container>
        <C.Form onSubmit={sendEmail}>
          <C.Label htmlFor="name">Nome</C.Label>
          <C.Input
            id="name"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <C.Label htmlFor="email">Email</C.Label>
          <C.Input
            id="email"
            type="email"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <C.Label htmlFor="message">Mensagem</C.Label>
          <C.Textarea
            id="message"
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <C.Button type="submit" value="Enviar" />
        </C.Form>

        <C.ContainerImg>
          <img src={ImgHandshake} alt="Aperto de mão" />
        </C.ContainerImg>
      </C.Container>
    </section>
  );
};
