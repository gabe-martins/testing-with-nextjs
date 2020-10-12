import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";

import Head from "next/head";
import { Container, LensContainer } from "../../styles/Pages/Home";

export default function Glasses({ glass }) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <h1>Carregando...</h1>;
  }

  return (
    <Container>
      <Head>
        <title>Gleear</title>
      </Head>
      <body>
        <main>
          <h2>As lentes certas para você!</h2>

          <LensContainer key={glass.glassName}>
            <h3>{glass.glassName}</h3>
          </LensContainer>
        </main>
      </body>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://gleearapp-backend.herokuapp.com/glass");
  const data = await res.json();

  const paths = data.map((glass) => {
    return {
      params: {
        glassVision: glass.glassVision,
        glassFrame: glass.glassFrame,
        glassStyle: glass.glassStyle,
        glassActivity: glass.glassActivity,
        glassDistance: glass.glassDistance,
        glassBudget: glass.glassBudget,
      },
    };
  });

  console.log(paths)

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const {
    glassVision,
    glassFrame,
    glassStyle,
    glassActivity,
    glassDistance,
    glassBudget,
  } = context.params;

  const res = await fetch(
    `https://gleearapp-backend.herokuapp.com/select?glassVision=${glassVision}&glassFrame=${glassFrame}&glassStyle=${glassStyle}&glassActivity=${glassActivity}&glassDistance=${glassDistance}&glassBudget=${glassBudget}`
  );
  const data = await res.json();

  console.log(data)

  return {
    props: {
      glass: data,
    },
  };
};
