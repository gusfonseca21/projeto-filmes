import Image from "next/image";

import type { NextPage } from "next";

import heroImage1 from "/public/images/hero-image-1.webp";
import heroImage2 from "/public/images/hero-image-2.webp";
import heroImage3 from "/public/images/hero-image-3.webp";

import Header from "../components/Header/Header";
import classes from "../styles/Home.module.css";

const Home: NextPage = (org) => {
  console.log(org);
  return (
    <>
      <Header />
      <main className={classes.main}>
        <div className={classes.hero}>
          <h2 className={classes["hero-text"]}>
            Faça buscas no maior banco de dados de filmes e séries da internet!
          </h2>
          <div className={classes["hero-images"]}>
            <div className={classes["hero-image-1"]}>
              <Image
                src={heroImage1}
                alt="Posters de filmes"
                className={classes.teste}
              />
            </div>
            <div className={classes["hero-image-2"]}>
              <Image
                src={heroImage2}
                alt="Posters de filmes"
                className={classes.teste}
              />
            </div>
            <div className={classes["hero-image-3"]}>
              <Image
                src={heroImage3}
                alt="Posters de filmes"
                className={classes.teste}
              />
            </div>
          </div>
        </div>
      </main>
    </>
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
