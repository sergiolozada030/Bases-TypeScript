
let habilidades: string[] = ['Bash', 'Counter'];

habilidades.push('200')

console.log(habilidades);

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'James',
    hp: 100,
    habilidades: ['Bash','Goles','asistencias']
}

personaje.puebloNatal = 'Bogota'

console.table(personaje);