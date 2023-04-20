import React from "react"
import Banner from "../Componentes/Banner"
import Footer from "../Componentes/Footer"
import GlobalEstilos from "../Global"
import Videos from "../Componentes/Carrusel"
import VideoCard from "../Componentes/VideoCard"

function Home() {
  return (
    <>
     <GlobalEstilos />
      <Banner />
      <Videos />
      <Footer />
    </>
  );
}

export default Home;
