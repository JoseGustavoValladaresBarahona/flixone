
 import React from "react"
 import styled from "styled-components"
 import { useState, useEffect} from 'react'
import { Carousel } from 'antd'
 
 function VideoCard(props){
   const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [datos, setDatos] = useState([])
  
  const Card = styled.iframe`
      padding-bottom: 40px;
      border: 1px solid ${props => props.color};
      `;
   const H2 = styled.h3`
      color: ${props => props.color};
      margin-top: 20px;
      margin-bottom: 20px;
      `;
      
   //Videos
   useEffect(() => {
    fetch("http://localhost:5000/Videos")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setDatos(result);
        },
        // Error
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
 
 if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Cargando...</div>;
  } 
  
   
  const {categoria, color} = props
  const listaCard = datos.map((dato) =>
    (dato.categoria === categoria?
    <div key={dato.id}>
    
     <H2 color={color}>Formacion {dato.categoria} Alura Latam</H2>
      <Card color={color} width="99%" height="250" src={dato.linkVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
    </div>
   : ""));
   
  return (
    <Carousel>
       {listaCard}
    </Carousel>
  );
}

 export default VideoCard