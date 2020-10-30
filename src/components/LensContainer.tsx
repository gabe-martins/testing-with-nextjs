import React from "react";
import Head from "next/head";

import { Container } from "../styles/components/LensContainer";
import { GetStaticProps } from "next";

interface LensProps {
  glassName: string
}

export default function LensContainer() {
  return (
    <>
      <Container>
        <h3></h3>
      </Container>
    </>
  );
}
