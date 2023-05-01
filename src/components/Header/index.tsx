import React, { useEffect, useState } from "react";
import * as C from "./styles";
import { useMedia } from "../../Hooks/useMedia";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlineMessage,
} from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [mobilemenu, setMobilemenu] = useState(false);
  const mobile = useMedia("(max-width: 56rem)");

  const { pathname } = useLocation();
  useEffect(() => {
    setMobilemenu(false);
  }, [pathname]);

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
            <Link to="/">
              <AiOutlineHome />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <AiOutlineUser />
              <span>Sobre</span>
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <AiOutlineFundProjectionScreen />
              <span>Projetos</span>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <AiOutlineMessage />
              <span>Contato</span>
            </Link>
          </li>
        </ul>
      </C.Nav>
    </C.Header>
  );
};
