/* 
Transformar Array de Objetos a Objeto por ID:

Problema: Dada tu lista productosTiendaCompleto, transfórmala en un único objeto donde las claves sean los 
id de los productos y los valores sean los objetos de los productos completos.

Input: productosTiendaCompleto

Output: 
{ 1: { id: 1, nombre: "Teclado Mecánico RGB", ... }, 2: { id: 2, nombre: "Mouse Inalámbrico Gaming", ... }, ... }
*/
import { productosTiendaCompleto } from "./00-datos.js";

function transformarArray(productos) {
  return productos.reduce((acc, productoActual) => {
    acc[productoActual.id] = productoActual;
    return acc;
  }, {});
}

console.log(transformarArray(productosTiendaCompleto));
