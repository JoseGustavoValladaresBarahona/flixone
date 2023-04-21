import { Outlet, Link } from "react-router-dom";
import styled from "styled-components"
import logoAluraFlix from "../Imagenes/logoAluraFlix.png"
import GlobalEstilos from "../Global"
import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AddCardIcon from '@mui/icons-material/AddCard';

const Layout = () => {
    const Div = styled.div`
      display:flex;
      justify-content: space-between;
      border-sizing: border-box;
      margin-top:10px;
      margin-bottom:15px;
      padding:10px;
      width:100%;
  `;
    const ImgHeader = styled.img`
      width: 168px;
      height: 48px;
  `;
  const Nav = styled.nav`
      border: 1px solid;
      background: #000000;
  `;
  
  return (
    <>
     <GlobalEstilos />
      <Nav>
        <Div>
          <ImgHeader src={logoAluraFlix} alt="logo"/>

               <Link to="/" style={{ 
               color: 'white'
               }}><HomeIcon></HomeIcon></Link>
            
             <Link to="/Nuevo" style={{ color: 'white'}}><VideoLibraryIcon ></VideoLibraryIcon></Link>
           
               <Link to="/NuevaCategoria" style={{ color: 'white' 
               }}><AddCardIcon ></AddCardIcon></Link>
            
        </Div>
      </Nav>
      <Outlet />
    </>
  )
};

export default Layout;