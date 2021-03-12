/*
    ===== Código de TypeScript =====
*/

interface SuperHeroe{
    nombre: string;
    edad: number;
    direccion: Direccion; 
    mostrarDireccion: () => string;
}

interface Direccion {
    calle: string,
    ciudad: string,
    pais: string
}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 21,
    direccion: {
        calle: 'Main St',
        ciudad: 'NY',
        pais: 'USA'
    },
    mostrarDireccion(){
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.calle;
    }
}

const direccion = superHeroe.mostrarDireccion();

console.log(direccion);
