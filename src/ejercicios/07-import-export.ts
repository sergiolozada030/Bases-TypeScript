/*
    ===== Código de TypeScript =====
*/
import { Producto, calcularISV } from './06-desestructuracion-funcion';


const carritosCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 1000
    },
    {
        desc: 'Telefono 2',
        precio: 2000
    }
]


const [total, isv ] = calcularISV( carritosCompras);

console.log('Total => ', total);
console.log('Impuesto => ', isv);


