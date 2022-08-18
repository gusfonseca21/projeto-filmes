import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header/Header";
import classes from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={classes.container}>
      <Head>
        <title>Projeto Filmes</title>
        <meta name="description" content="Filmes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={classes.main}></main>

      <footer className={classes.footer}></footer>
    </div>
  );
};

export default Home;
