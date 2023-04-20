import { Outlet, Link } from "react-router-dom";
import styled from "styled-components"
import logoAluraFlix from "../Imagenes/logoAluraFlix.png"
import GlobalEstilos from "../Global"


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
         <ul>
            <li>
               <Link to="/" style={{ 
               color: 'white'
               }}>Home</Link>
            </li>
            <br/>
           <li> 
             <Link to="/Nuevo" style={{ color: 'white'}}>Nuevo Video</Link>
           </li>
           <br/>
            <li>
               <Link to="/NuevaCategoria" style={{ color: 'white' ,backgroundColor:"#2A7AE4"
               }}>Nueva Categoria</Link>
            </li>
          </ul>
        </Div>
      </Nav>
      <Outlet />
    </>
  )
};

export default Layout;