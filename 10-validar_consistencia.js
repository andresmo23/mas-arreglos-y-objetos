/* 
Validar Consistencia de Stock:

Problema: Dada tu productosTiendaCompleto, verifica si todos los productos tienen un stock que es 
un número mayor o igual a cero. Además, si un producto tiene stock: 0, su valoracion debe ser 
menor a 4.0 (asumiendo que productos sin stock no deberían tener valoraciones muy altas).

Input: productosTiendaCompleto

Output: true o false.
*/
import { productosTiendaCompleto } from "./00-datos.js";

function stockVerify(products) {
  return products.every((product) => {
    return product.stock >= 0 && (product.stock !== 0 || product.valoracion < 4.0);
  });
}

console.log(stockVerify(productosTiendaCompleto));
