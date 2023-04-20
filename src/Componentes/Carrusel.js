
import React from 'react'
import VideoCard from "../Componentes/VideoCard"
import { useState, useEffect } from 'react'
import styled from "styled-components"

 function Videos() {
  const [cargos, setCargos] = useState([])
    
  useEffect(() => {
    fetch("http://localhost:5000/Categorias")
      .then(res => res.json())
      .then(
        (result) => {
          setCargos(result);
        },
      )
  }, [])
  
  const Div = styled.div`
      background-color: #000000;
      margin-left:15%;
      margin-right:15%;
  `;
     const lista = cargos.map(cargo =>{
        return <VideoCard categoria={cargo.categoria} color={cargo.color}/>
     })
   return (
     <Div>
       {lista}
     </Div>
    )
  }

export default Videos