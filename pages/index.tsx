import type { NextPage } from "next";

import Header from "../components/Header/Header";
import classes from "../styles/Home.module.css";

import { useSelector, useDispatch } from "react-redux";
import { increment } from "../slices/stylesSlice";
import type { RoootState } from "../store";

const Home: NextPage = (org) => {
  const count = useSelector((state: RoootState) => state.counter.value);

  const dispatch = useDispatch();

  console.log(org);
  return (
    <div
      className={classes["page-container"]}
      onClick={() => dispatch(increment())}
    >
      <Header />
      <main className={classes.main}>
        <div className={classes.hero}>
          <h2 className={classes["hero-text"]}>
            Faça buscas no maior banco de dados de filmes e séries da internet!{" "}
            {count}
          </h2>
          <h3 className={classes["hero-subtext"]}>
            Procure por nomes de filmes, séries, atores, atrizes, diretores,
            cineastas, etc.
          </h3>
        </div>
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=5f056a3fc1fe0a39a91b128597e61675&language=pt-BR&page=1`
  );

  const data = await response.json();
  return {
    props: {
      topRated: data,
    },
  };
};
