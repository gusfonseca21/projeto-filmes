import { useState } from "react";

import Image from "next/image";

import classes from "./Header.module.css";

import logo from "/public/logos/GFMDb-logo.png";

import { BiSearchAlt } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";

const Header = () => {
  const [menuState, setMenuState] = useState(false);

  const menuStateHandler = (state: boolean) => {
    setMenuState(!state);
  };

  return (
    <header className={classes.header}>
      <Image
        src={logo}
        height="50px"
        width="103px"
        alt="Gustavo Fonseca Movie Database logo"
      />
      <div className={classes["header-center"]}>
        <div className={classes["search-bar"]}>
          <input
            type="text"
            className={classes["search-input"]}
            placeholder="Pesquise por filmes e séries"
          />
          <BiSearchAlt className={classes["search-icon"]} />
        </div>
        <div
          className={classes["menu"]}
          onClick={() => menuStateHandler(menuState)}
        >
          <HiMenu className={classes["menu-icon"]} />
          <span>Menu</span>
          {menuState && <div className={classes["menu-open"]}></div>}
        </div>
      </div>

      <div className={classes["login-sign-in-buttons"]}>
        <button className={classes["login"]}>Entrar</button>
        <button className={classes["sign-in"]}>Cadastre-se</button>
      </div>
    </header>
  );
};

export default Header;
