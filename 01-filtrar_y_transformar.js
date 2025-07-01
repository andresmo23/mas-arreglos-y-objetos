/* 
Filtrar y Transformar Productos:

Problema: Dada una lista de productos, devuelve un nuevo array que contenga solo los productos de la 
categoría "perifericos" y que tengan un stock mayor a 5. Para cada uno de esos productos, el nuevo array 
debe contener solo su nombre y su precioConIVA (calcula el IVA al 19%).

Input: productosTiendaCompleto

Output: [{ nombre: "Teclado Mecánico RGB", precioConIVA: 101150 }, ...]
*/

import { productosTiendaCompleto } from "./00-datos.js";

function perifericosConIva(productos) {
  // 1. Uso el metodo filter para que me devuelva un nuevo arreglo si se cumple la condicion dada
  const perifericos = productos.filter((producto) => {
    return producto.categoria === "perifericos" && producto.stock > 5;
  });

  // 2. Uso reduce para devolver el objeto con solo el nombre y el precioConIva por producto
  const resultado = perifericos.map((producto) => {
    // guardo el precio con el iva en una constante
    const precioConIVA = producto.precio + producto.precio * 0.19;

    // retorno un nuevo array de objetos solo con las propiedades que quiero
    return {
      nombre: producto.nombre,
      precioConIVA: precioConIVA,
    };
  });

  return resultado;
}

console.log(perifericosConIva(productosTiendaCompleto));
