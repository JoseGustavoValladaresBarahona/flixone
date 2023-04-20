import React from "react"
import Banner from "../Componentes/Banner"
import Footer from "../Componentes/Footer"
import GlobalEstilos from "../Global"
import Videos from "../Componentes/Carrusel"
import VideoCard from "../Componentes/VideoCard"
import styled from "styled-components"

function Home() {
  const FondoHome = styled.div`
      background-color:#000000;
      `;
  return (
    <FondoHome>
     <GlobalEstilos />
      <Banner />
      <Videos />
      <Footer />
    </FondoHome>
  );
}

export default Home;
