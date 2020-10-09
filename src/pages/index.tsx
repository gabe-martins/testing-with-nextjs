import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Head from "next/head";

import { Container, LensContainer } from "../styles/Pages/Home";

export default function Home({ glasses }) {
  return (
    <Container>
      <Head>
        <title>Gleear</title>
      </Head>
      <body>
        <main>
          <h2>As lentes certas para você!</h2>

          {glasses.map((glass) => {
            return (
              <>
                <LensContainer key={glass.glassName}>
                  <h3>{glass.glassName}</h3>
                </LensContainer>
              </>
            );
          })}
        </main>
      </body>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`https://gleearapp-backend.herokuapp.com/glass`);
  const data = await res.json();

  console.log(data)

  return {
    props: {
      glasses: data,
    },
    revalidate: 10,
  };
};
