
import React from "react"
import styled from "styled-components"
import logoAluraFlix from "../Imagenes/logoAluraFlix.png"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub'
import {Link} from '@mui/material';

function Footer(){
  const FooterCss = styled.div`
      background-color: #000000;
      text-align: center;
      width:100%;
  `
  const ImgFooter = styled.img`
      width: 252.5px;
      height: 60px;
  `;
  const DivIcon = styled.div`
      display:flex;
      justify-content:space-evenly;
  `;
  return(
    <>
    <FooterCss>
      <div>
      <ImgFooter src={ logoAluraFlix } alt="Banner"/>
      </div>
      <DivIcon>
         <Link href="https://linkedin.com/in/josé-gustavo-valladares-barahona"><LinkedInIcon></LinkedInIcon></Link>
          <Link href="https://github.com/JoseGustavoValladaresBarahona"><GitHubIcon></GitHubIcon></Link>
      </DivIcon>
     </FooterCss>
    </>
 )}
export default Footer