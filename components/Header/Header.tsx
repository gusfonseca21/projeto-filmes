import Image from "next/image";

import classes from "./Header.module.css";

import logo from "/public/logos/GFMDb-logo.png";

import { BiSearchAlt } from "react-icons/bi";

const Header = () => {
  return (
    <header className={classes.header}>
      <Image
        src={logo}
        height="50px"
        width="103px"
        alt="Gustavo Fonseca Movie Database logo"
      />
      <div className={classes["search-bar"]}>
        <input
          type="text"
          className={classes["search-input"]}
          placeholder="Pesquise por filmes e séries"
        />
        <BiSearchAlt className={classes["search-icon"]} />
      </div>
      <div className={classes["login-sign-in-buttos"]}>
        <button className={classes["login"]}>Entrar</button>
        <button className={classes["sign-in"]}>Cadastre-se</button>
      </div>
    </header>
  );
};

export default Header;
