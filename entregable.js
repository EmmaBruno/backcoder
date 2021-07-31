class Usuario {

    constructor (nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = []
        this.mascotas = []
    }

    getFullName() {
        console.log(`El nombre completo del usuario es: ${this.nombre} ${this.apellido}`);
    }

    addMascota(nombreMascota) {
        this.mascotas.push(nombreMascota);
    }

    countMascotas() {
        console.log(`la catidad de mascotas de ${this.nombre} son: `)
        console.log(this.mascotas.length)
    }

    addBook(titulo, autor) {
        this.libros.push({titulo, autor})
    }

    getBookNames() {
        this.libros.map((libro)=>console.log(libro.titulo))
    }
}

let usuario = new Usuario ('Juan', 'Perez')
console.log(usuario)
usuario.getFullName()
usuario.addMascota('gato')
usuario.countMascotas()
usuario.addMascota('perro')
usuario.countMascotas()
usuario.addBook('El fugitivo', 'Stephen King')
usuario.addBook('Tormenta de espadas', 'George R. R. Martin')
usuario.addBook('La dama del lago', 'Andrzej Sapkowski')
usuario.getBookNames()
