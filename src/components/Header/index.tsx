import React, { useState } from "react";
import * as C from "./styles";
import { useMedia } from "../../Hooks/useMedia";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlineMessage,
} from "react-icons/ai";

export const Header = () => {
  const [mobilemenu, setMobilemenu] = useState(false);
  const mobile = useMedia("(max-width: 56rem)");

  return (
    <C.Header>
      <C.Logo>DB</C.Logo>

      <C.Nav>
        {mobile && (
          <C.MobileBtn
            aria-label="Menu"
            onClick={() => setMobilemenu(!mobilemenu)}
            className={mobilemenu ? "mobileBtnActive" : ""}
          />
        )}
        <ul className={mobilemenu ? "navMobileActive" : ""}>
          <li>
            <a href="#">
              <AiOutlineHome />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <AiOutlineUser />
              <span>Sobre</span>
            </a>
          </li>
          <li>
            <a href="#">
              <AiOutlineFundProjectionScreen />
              <span>Projetos</span>
            </a>
          </li>
          <li>
            <a href="#">
              <AiOutlineMessage />
              <span>Contato</span>
            </a>
          </li>
        </ul>
      </C.Nav>
    </C.Header>
  );
};
