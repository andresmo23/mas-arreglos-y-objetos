/* 
Calcular el Producto Más Barato por Categoría:

Problema: Dada la lista de productos, encuentra el producto más barato para cada categoría existente.

Input: productosTiendaCompleto

Output: {"perifericos": { id: 2, nombre: "Mouse Inalámbrico Gaming", ... }, 
"almacenamiento": { id: 3, nombre: "SSD 1TB NVMe", ... }, ...}
*/
import { productosTiendaCompleto } from "./00-datos.js";

function masBaratoPorCategoria(productos) {
  return productos.reduce((acc, productoActual) => {
    const categoriaActual = productoActual.categoria; // para mayor claridad

    // Si la categoría no existe en el acumulador, este es el primer producto de esa categoría
    if (!acc[categoriaActual]) {
      acc[categoriaActual] = productoActual; // lo guardo completo en el acc bajo su categoria
    }
    // Si la categoría ya existe, comparo precios
    else {
      // Comparo el precio del producto actual con el precio del producto que ya está guardado
      if (productoActual.precio < acc[categoriaActual].precio) {
        // Si el producto actual es más barato, actualiza el acumulador
        acc[productoActual.categoria] = productoActual;
      }
    }

    // al final de la condicion retornar el acc para la siguiente iteración
    return acc;
  }, {});
}

console.log("Productos más baratos por categoria:", masBaratoPorCategoria(productosTiendaCompleto));
