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
    get id() {
        return this.#id;
      }
    
      get nombre() {
        return this.#nombre;
      }
    
      set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
      }
    
      get precio() {
        return this.#precio;
      }
    
      set precio(nuevoPrecio) {
        this.#precio = nuevoPrecio;
      }
    
      get categoria() {
        return this.#categoria;
      }
    
      set categoria(nuevoCategoria) {
        this.#categoria = nuevoCategoria;
      }
    
      get imagen() {
        return this.#imagen;
      }
    
      set imagen(nuevoImagen) {
        this.#imagen = nuevoImagen;
      }
      get descripcion() {
        return this.#descripcion;
      }
    
      set descripcion(nuevoDescripcion) {
        this.#descripcion = nuevoDescripcion;
      }

      get stock() {
        return this.#stock;
      }
    
      set stock(nuevoStock) {
        this.#stock = nuevoStock;
      }




      //Metodo par JSON.stringify
      toJSON() {
        return {
          id: this.id,
          nombre: this.nombre,
          precio: this.precio,
          categoria: this.categoria,
          imagen: this.imagen,
          descripcion: this.descripcion,
          stock: this.stock,
        };
      }
    }
    
  