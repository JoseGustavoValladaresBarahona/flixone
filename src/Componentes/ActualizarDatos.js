import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { validarCategoria, validarDescripcion, validarCodigo } from "../Componentes/NuevoVideo/ValidarInput"
import  { useState} from "react";
import { Box } from "@mui/material";
import axios from "axios";

export default function ActualizarDatos(props) {
  const [color, setColor] = useState(
 "");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [codigo, setCodigo] = useState(
 "" );
  const [error, setError] = useState({
    error:false
  });
  const [id, setId] = useState([])
  const [open, setOpen] = React.useState(false);
  
      //Actualizar Registro
  const NuevosDatos = () => {
   fetch(`http://localhost:5000/Categorias/${localStorage.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({categoria, descripcion, color, codigo}),
     });
    };
 
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const Registro =(e) => {
    e.prevenDefault();
  }
  return (
    <div>
      <Link variant="outlined" onClick={handleClickOpen}>
        Editar
      </Link>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Editar Registro</DialogTitle>
        <DialogContent>
        Desea Actualizar el siguiente registro con: 
        Id: {localStorage.id},
          categoria: {localStorage.categoria},  
           Descripcion: {localStorage.descripcion}, 
           Color: {localStorage.color},
           Codigo: {localStorage.codigo}
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={Registro}
    > 
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        required
        variant="filled"
        margin="dense"
        type="text"
        error={validarCategoria(categoria) ? false : true}
        helperText={
          !validarCategoria(categoria) ? "No pueden haber campos vacíos, y la longitud de los datos debe ser de 5 a 50 caracteres.": ""
        }
        value={categoria}
        onChange={(e) => {
          setCategoria(e.target.value);
        }}
      />
      <TextField
        label="Descripcion"
        variant="outlined"
        fullWidth
        required
        multiline
        rows={6}
        variant="filled"
        margin="dense"
        type="text"
        error={validarDescripcion(descripcion) ? false : true}
        helperText={
          !validarDescripcion(descripcion) ? "No pueden haber campos vacíos, y la longitud de los datos debe ser de 5 a 50 caracteres.": ""
        }
        value={descripcion}
        onChange={(e) => {
          setDescripcion(e.target.value);
        }}
      />
       <TextField
        label="Color"
        variant="outlined"
        fullWidth
        sx={{paddingTop:1}}
        required
        variant="filled"
        margin="dense"
        type="color"
        error={color ? false: true}
        helperText={
         !color ? "Por favor seleccione una opción." : ""
        }
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
       <TextField
        label="Código de seguridad"
        variant="outlined"
        fullWidth
        required
        variant="filled"
        margin="dense"
        type="text"
        error={validarCodigo(codigo) ? false : true}
        helperText={
          !validarCodigo(codigo) ? "No pueden haber campos vacíos, y la longitud de los datos debe ser de 5 a 50 caracteres." :""
        }
        value={codigo}
        onChange={(e) => {
          setCodigo(e.target.value);
        }}
      />
      </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
      
      <Button variant="contained" type="submit" onClick={()=>
        NuevosDatos()
        }
      >
        Enviar
      </Button>
      <Button variant="outlined" type="reset" sx={{ml: 5}} color="success" onClick={(e)=>
        {setCategoria("")
        setDescripcion("")
        setColor("")
        setCodigo("")}
      }>
        Limpiar
      </Button>
        </DialogActions>
        <DialogContent id="demo">
        </DialogContent>
      </Dialog>
    </div>
  );
}