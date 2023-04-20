
import React, { useState, useEffect } from "react";
import { Typography, TextField, Button, Box } from "@mui/material"
import MenuItem from '@mui/material/MenuItem';
import { validarLinkImg, validarLinkVideo, validarTitulo, validarDescripcion, validarCodigo } from "../Componentes/NuevoVideo/ValidarInput"
import Footer from "../Componentes/Footer"

const DatosVideo = () => {
  const [titulo, setTitulo] = useState("");
  const [linkVideo, setLinkVideo] = useState("");
  const [link, setLinkImg] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [codigo, setCodigo] = useState("");
  const [cargos, setCargos] = useState([])
  const [error, setError] = useState({
    error:false
  });
  //Cargos
  useEffect(() => {
    fetch("http://localhost:5000/Categorias")
      .then(res => res.json())
      .then(
        (result) => {
          setCargos(result);
        },
      )
  }, [])
  //videos
  const nuevoVideo = () => {
   fetch("http://localhost:5000/Videos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({titulo, linkVideo, link,categoria,descripcion,codigo}),
  }).then(response => {
    if (response.ok){
      return alert("Registro Exitoso")
    }else if(response.error){
      return alert("Error: " + response.error)
    }
  });
 }
    
 const handleSubmit = (e) =>{
   e.preventDefault();
   nuevoVideo()
 }

  return (
    <>
    <Box
      component="form"
      autocomplete="off"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      >
    <Typography variant="h4">Nuevo Video 
        </Typography>
      <TextField
        label="Título"
        variant="outlined"
        fullWidth
        required
        error={validarTitulo(titulo)?false:true}
        helperText={!validarTitulo(titulo) ? "No pueden haber campos vacíos, y la longitud de los datos debe ser de 5 a 50 caracteres.":""}
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        variant="filled"
        margin="dense"
        type="text"
      />
       <TextField
        label="Link de Video"
        variant="outlined"
        fullWidth
        required
        variant="filled"
        margin="dense"
        type="text"
        error={validarLinkVideo(linkVideo)?false:true}
        helperText={!validarLinkVideo(linkVideo) ?
            "No pueden haber campos vacíos, y la longitud de los datos debe ser de 10 a 50 caracteres y debe iniciar con https://.":""
        }
        value={linkVideo}
        onChange={(e) => {
          setLinkVideo(e.target.value);
        }}
      />
      <TextField
        label="Link de imagen del video"
        variant="outlined"
        fullWidth
        required
        variant="filled"
        margin="dense"
        type="text"
        error={validarLinkImg(link) ? false:true}
        helperText={!validarLinkImg(link)? "No pueden haber campos vacíos, y la longitud de los datos debe ser de 10 a 50 caracteres y debe iniciar con https://.":""
        }
        value={link}
        onChange={(e) => {setLinkImg(e.target.value)
        }}
      />
      <TextField
       variant="filled"
       margin="dense"
       fullWidth
       required
       select
       label="Categorias"
       error={categoria ? false : true}
       helperText={!categoria ? "Por favor seleccione una opción" : ""}
       onChange={(e) => {
          setCategoria(e.target.value);
        }}
        >
          {cargos.map((option) => (
            <MenuItem key={option.categoria} value={option.categoria}>
              {option.categoria}
            </MenuItem>
          ))}
        </TextField>
        
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
          !validarDescripcion(descripcion) ? "No pueden haber campos vacíos, y la longitud de los datos debe ser de 5 a 50 caracteres." : ""
        }
        value={descripcion.value}
        onChange={(e) => {
          setDescripcion(e.target.value);
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
          !validarCodigo(codigo) ? "No pueden haber campos vacíos, y la longitud de los datos debe ser de 1 a 50 caracteres.": ""
        }
        value={codigo}
        onChange={(e) => {
          setCodigo(e.target.value);
        }}
      />
      <Button variant="contained" type="submit"
        onClick={()=>handleSubmit}
      >
        Registrar
      </Button>
    </Box>
    <Footer />
    </>
  );
};

export default DatosVideo
