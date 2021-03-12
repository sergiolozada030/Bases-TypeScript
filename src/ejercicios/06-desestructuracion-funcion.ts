/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia 1101',
    precio: 3000
}

const tableta: Producto = {
    desc: 'ipad 2021',
    precio: 50000
}

export function calcularISV( productos: Producto[]){

    let total = 0;

    productos.forEach( ({ precio }) => {
        total += precio;
    });

    return [total, total * 0.15];
}

/* const carrito = [telefono, tableta];
const [total, isv] = calcularISV(carrito);

console.log('Total => ',total);
console.log('Impuesto 15% => ', isv);
 */