import React, { useEffect } from "react";
import Head from "next/head";

import { Container, LensContainer } from "../styles/Pages/Home";

import api from "../services/api";

const Home: React.FC = () => {
  useEffect(() => {
    async function loadLens() {
      const res = await api.get("/glass");
      return {data: res.data}
    }
    loadLens();
  }, []);


  return (
    <Container>
      <Head>
        <title>Gleear</title>
      </Head>
      <body>
        <main>
          <h2>As lentes certas para você!</h2>

          <ul>
           {data.map(glass => (
              <LensContainer>
              <h3>{glass.name}</h3>
            </LensContainer>
           ))}
          </ul>
        </main>
      </body>
    </Container>
  );
};

export default Home;
