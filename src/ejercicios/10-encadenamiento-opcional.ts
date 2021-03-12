/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Sergio'
}

const pasajero2: Pasajero = {
    nombre: 'Adriana',
    hijos: ['Natalia', 'Gabriel']
}

function imprimeHijos( pasajeros: Pasajero){

    const cuantosHijos = pasajeros.hijos?.length || 0;

    console.log(cuantosHijos);
    
}

const result = imprimeHijos(pasajero1);