export const validarCantidadCaracteres = (texto, min, max) => {
    if (texto.length >= min && texto.length <= max) {
      
      return true;
    } else {
      return false;
    }
  };
  
