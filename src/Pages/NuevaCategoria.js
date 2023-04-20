
import React, { useState, useEffect } from "react";
import { Typography, TextField, Button, Box } from "@mui/material"
import { validarCategoria, validarDescripcion, validarCodigo } from "../Componentes/NuevoVideo/ValidarInput"
import Footer from "../Componentes/Footer"
import BasicTable from "../Componentes/Tabla"

const DatosCategoria = () => {
  const [color, setColor] = useState(
 "");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [codigo, setCodigo] = useState(
 "" );
  const [error, setError] = useState({
    error:false
  });
   const nuevaCategoria = () => {
   fetch("http://localhost:5000/Categorias", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({categoria, descripcion, color, codigo}),
     }).then(response => {
    if (response.ok){
      return alert("Registro Exitoso")
    }else if(response.error){
      return alert("Error: " + response.error)
    }
  });
    };

   const Registro = (e) => {
        e.preventDefault();
        nuevaCategoria()
      }

  return (
    <>
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
    > <Typography variant="h4">Nueva Categoria
        </Typography>
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
     <div>
      <Button variant="contained" type="submit" onClick={()=>Registro}>
        Enviar
      </Button>
      <Button variant="outlined" type="reset"  sx={{ml: 5}} color="success" onClick={()=> {setCategoria("")
        setDescripcion("")
        setColor("")
        setCodigo("")}
      }>
        Limpiar
      </Button>
      </div>
    </Box>
    <BasicTable />
    <Footer />
  </>
  );
};

export default DatosCategoria
