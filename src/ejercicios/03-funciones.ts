/*
    ===== Código de TypeScript =====
*/

import { createRegularExpressionLiteral } from "typescript";

function sumar(a: number,b: number){
    return a + b;
}

const sumarFlecha = (a:number, b:number ) => {
    return a + b;
}

const multiplicar = (numero: number, otroNumero?: number, base:number = 2) => {
    return numero * base;
}


interface PersonajeLOR {
    nombre: string;
    ph: number;
    mostrarHp: () => void;
}

function curar( personaje: PersonajeLOR, curarX: number): void{
    personaje.ph += curarX; 
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    ph: 50,
    mostrarHp(){
        console.log('Puntos de vida: ', this.ph); 
    }
} 

curar( nuevoPersonaje, 30);

nuevoPersonaje.mostrarHp();