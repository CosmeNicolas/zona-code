export default class Usuario {
  #id;
  #nombre;
  #apellido;
  #email;
  #contraseña;
  constructor(id = crypto.randomUUID(), nombre, apellido, email, contraseña) {
    this.#id = id;
    this.#nombre = nombre;
    this.#apellido = apellido;
    this.#email = email;
    this.#contraseña = contraseña;
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
  get apellido() {
    return this.#apellido;
  }
  set apellido(nuevoApellido) {
    this.#apellido = nuevoApellido;
  }
  get email() {
    return this.#email;
  }
  set email(nuevoEmail) {
    this.#email = nuevoEmail;
  }
  get contraseña() {
    return this.#contraseña;
  }
  set contraseña(nuevaContraseña) {
    this.#contraseña = nuevaContraseñaontraseña;
  }
  toJSON() {
    return {
      id: this.id,
      nombre: this.nombre,
      apellido: this.apellido,
      email: this.email,
      contraseña: this.contraseña,
    };
  }
}