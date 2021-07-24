class Usuario {

    constructor (nombre, apellido, nombrelibro, autor, mascota) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [{
            'nombre': nombrelibro,
            'autor': autor
        }]
        this.mascotas = [
            mascota
        ]
    }

    getFullName() {
        console.log(`${this.nombre} ${this.apellido}`);
    }

    addMascota(String) {
        mascotas.push(String)
    }

    countMascotas() {
        totalmascotas = this.mascotas
        console.log(totalmascotas)
    }

    addBook(nuevolibro, nuevoautor) {
        this.libros.push(nuevolibro, nuevoautor)
    }

    getBookNames() {
        libros.map(libros => libros.nombrelibro)
    }
}

let usuario = new Usuario ('Juan', 'Perez', 'El señor de las moscas', 'William Golding', 'perro')
console.log(usuario)
usuario.getFullName()
usuario.countMascotas()