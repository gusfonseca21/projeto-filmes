import classes from "./Header.module.css";

import { BiSearchAlt } from "react-icons/bi";

const Header = () => {
  return (
    <header className={classes.header}>
      <h2 className={classes.logo}>Projeto Filmes</h2>
      <div className={classes["search-bar"]}>
        <input type="text" className={classes["search-input"]} placeholder="Pesquise por filmes e séries" />
        <BiSearchAlt className={classes["search-icon"]}/>
      </div>
      <div className={classes["login-sign-in-buttos"]}>
        <button className={classes["login"]}>Entrar</button>
        <button className={classes["sign-in"]}>Cadastre-se</button>
      </div>
    </header>
  );
};

export default Header;
