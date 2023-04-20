
export const validarLinkImg = (link) => {
  const length = link.length;
  if (length > 10 && length < 50 && link.includes("https://") || length===0) {
    return true;
  } else {
    return false;
  }
};
export const validarLinkVideo = (linkVideo) => {
  const length = linkVideo.length;
  if (length >10 && length < 50  && linkVideo.includes("https://") || length===0)  {
    return true;
  } else {
    return false;
  }
};

export const validarTitulo = (titulo) => {
  const length = titulo.length;
  if (length > 5 && length < 50 || length===0) {
    return true;
  } else {
    return false;
  }
};

export const validarCategoria = (categoria) => {
  const length = categoria.length;
  if (length > 5 && length < 50 || length===0)  {
    return true;
  } else {
    return false;
  }
};

export const validarDescripcion = (descripcion) => {
  const length = descripcion.length;
  if (length > 5 && length < 50 || length===0) {
    return true;
  } else {
    return false;
  }
};
export const validarCodigo = (codigo) => {
  const length = codigo.length;
  if (length > 1 && length < 50 || length===0) {
    return true;
  } else {
    return false;
  }
}