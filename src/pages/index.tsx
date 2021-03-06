import { GetStaticProps } from "next";
import React from "react";
import Head from "next/head";

import { Container } from "../styles/Pages/Home";
import LensContainer from "../components/LensContainer";

export default function Home({ glasses }) {
  return (
    <Container>
      <Head>
        <title>Gleear</title>
      </Head>
      <body>
        <main>
          <h2>As lentes certas para você!</h2>
          <LensContainer />
        </main>
      </body>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`https://gleearapp-backend.herokuapp.com/glass`);
  const data = await res.json();

  return {
    props: {
      glasses: data,
    },
    revalidate: 10,
  };
};
