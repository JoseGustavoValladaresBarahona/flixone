import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import {Link} from '@mui/material';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'
 import { useState, useEffect} from 'react'
import ActualizarDatos from "../Componentes/ActualizarDatos"

export default function BasicTable() {
  const [categoria, setCategoria] = useState("")
  const [color, setColor] = useState(null)
  const [codigo, setCodigo] = useState("")
  const [descripcion, setDescripcion] = useState("")
   const [error, setError] = useState(null)
  const [datos, setDatos] = useState([])
  const [id, setId] = useState([])
  //Eliminar Registro Categorias
  const deleteData = async (id) => {
   try{
    const response = await fetch(`http://localhost:5000/Categorias/${id}`, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'}
    });
    
    if(response.ok){
          alert("Registro Eliminado con exito")
    }
   
   }catch(error){
     alert(error);
   }
  }
  //Eliminar registro video por categoria
const deleteDataV = async () => {
   try{
    const response = await fetch(`http://localhost:5000/Videos?categoria=${categoria}`, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'}
    });
    
    if(response.ok){
       // const jsonResponse = await response.json();
    }
   
   }catch(error){
     alert(error);
   }
  }

  //Mostrar Datos
   useEffect(() => {
    fetch("http://localhost:5000/Categorias")
      .then(res => res.json())
      .then(
        (result) => {
          setDatos(result);
        }
      )
  }, [])
   
  return (
    <TableContainer component={Paper} sx={{mt:5}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Descripcion</TableCell>
            <TableCell>Editar</TableCell>
            <TableCell>Remover</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datos.map((dato) => (
           <TableRow
              key={dato.categoria}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
          <TableCell component="th" scope="row"> {dato.categoria}
            </TableCell>
            <TableCell>{dato.descripcion}</TableCell>
           <TableCell>
             <Link to=""
             onClick={() => {
                localStorage.setItem('id', dato.id);
                localStorage.setItem('categoria', dato.categoria);
                localStorage.setItem('descripcion', dato.descripcion);
                localStorage.setItem('color', dato.color);
                localStorage.setItem('codigo', dato.codigo);
              }}
             > {<ActualizarDatos />} </Link>
           </TableCell>
           <TableCell>
              <Link to="#"
             onClick={() => {
                deleteData(dato.id)
                deleteDataV(dato.categoria)
              }}
             > Remover </Link>
           </TableCell>
             </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
 }
