export default class Usuario{
    #id;
    #nombre;
    #apellido;
    #email;

    constructor(ID= crypto.randomUUID(),nombre, apellido,email,celular){
        this.#id = id;
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#email = email;
    }

    get id(){
        return this.#id;
    }

    get nombre(){
        return this.#nombre;
    }

    set nombre(nuevoNombre) {
        this .#nombre = nuevoNombre;
    }

    get apellido(){
        return this.#apellido;
    }

    set apellido(nuevoApellido) {
        this .#apellido = nuevoApellido;
    }

    get email(){
        return this.#email;
    }

    set email(nuevoEmail) {
        this .#email = nuevoEmail;
    }
}
/*
// este método sirve para el objeto Json.stringify
toJSON(){
    return{
        id: this.id,
        apellido: this.apellido,
        nombre: this.nombre,
        email: this.email,
    }
}

}*/