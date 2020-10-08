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

          {glasses.map(() => {
            return (
              <>
                <LensContainer key={glasses.glassName}>
                  <h3>Espace Orma Plus</h3>
                </LensContainer>
              </>
            );
          })}
        </main>
      </body>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://gleearapp-backend.herokuapp.com/glass`);
  const data = await res.json();

  const paths = data.map((glasses) => {
    return { params: { glassName: glasses.glassName } };
  });

  return {
    paths,
    fallback: true,
  }
};

export const getStaticProps: GetStaticProps = async (context) => {  const res = await fetch(`https://gleearapp-backend.herokuapp.com/glass`);
  const data = await res.json();

  return {
    props: {
      glasses: data,
    },
    revalidate: 10,
  };
};
