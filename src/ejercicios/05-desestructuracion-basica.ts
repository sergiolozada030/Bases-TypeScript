/*
    ===== Código de TypeScript =====
*/

// Desestructuración de objetos

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    year: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Edd Sheeran',
        year: 2016, 
    }
}

const { volumen, segundo, cancion, detalles} = reproductor;
const { autor, year } = detalles;


/* 
console.log('El volumen actual es: ', volumen);
console.log('El segundo actual es: ', segundo);
console.log('la canción es: ', cancion);
console.log('la autor es: ', autor); */

// Desestructuración de arreglos 

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [ p1, p2, p3 ] = dbz;

console.log('Personaje 1:', p1 );
console.log('Personaje 2:', p2 );
console.log('Personaje 3:', p3 );

