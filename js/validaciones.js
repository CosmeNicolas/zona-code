export const validarCantidadCaracteres = (texto, min, max) => {
    if (texto.length >= min && texto.length <= max) {
      
      return true;
    } else {
      return false;
    }
  };
  
  export const validarEmail = (texto)=>{
    const patron = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    if(patron.test(texto)){
      
      return true;
    } else {
      return false;
    }
    };