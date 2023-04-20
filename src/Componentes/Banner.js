
import React from "react"
import styled from "styled-components"
import BannerMain from "../Imagenes/BannerMain.png"
import Group from "../Imagenes/Group.png"

function Banner(){
  const Img = styled.img`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width:100%;
  `;
  const ImgFront = styled.img`
    position:absolute;
    right: 40px;
    left:-0.5px;
    top:330px;
    background-repeat: no-repeat;
    background-position: center;
    width:100%; 
    @media (max-width:720px){
       top:200px;
    }
  `;
  return(
    <div>
       <Img src={Group} alt="Banner"/>
       <ImgFront src={BannerMain} 
         alt="Banner"/>
    </div>
 )}
export default Banner
