import Head from "next/head";
import React from "react";
import classes from "./Container.module.css";

const Container: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div className={classes.container}>
      <Head>
        <title>Projeto Filmes</title>
        <meta name="description" content="Filmes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {props.children}
    </div>
  );
};

export default Container;
