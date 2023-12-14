export default class Producto {
    #id;
    #nombre;
    #precio;
    #categoria;
    #imagen;
    #descripcion;
    #stock;
    
  
    constructor(id = crypto.randomUUID() , nombre, precio, categoria, imagen, descripcion, stock) {
      this.#id = id;
      this.#nombre = nombre;
      this.#precio = precio;
      this.#categoria = categoria;
      this.#imagen = imagen;
      this.#descripcion = descripcion;
      this.#stock = stock;
     
    }    
  }
  