/* 
Verificar Disponibilidad de Múltiples Productos:

Problema: Tienes una lista de productosSolicitados 
(ej. [{ id: 1, cantidad: 5 }, { id: 7, cantidad: 10 }]) y tu productosTiendaCompleto. 
Verifica si todos los productos solicitados están disponibles en la cantidad deseada 
(es decir, la cantidad solicitada es menor o igual al stock disponible).

Input: productosTiendaCompleto, productosSolicitados

Output: true o false
*/
import { productosTiendaCompleto } from "./00-datos.js";

const productosDisponibles = (pSolicitados, productos) => {
  // retorno true si todos los productos solicitdados cumplen la condicion por medio del metodo every
  return pSolicitados.every((itemSolicitado) => {
    // encontrar el producto correspondiente por medio de find
    const productoCorrespondiente = productos.find((producto) => producto.id === itemSolicitado.id);

    // manejo en caso de que el producto con el id no se encuentre en productosSolicitado
    if (!productoCorrespondiente) {
      return false;
    }

    // si lo encontró comparar la cantidad con el stock
    if (itemSolicitado.cantidad <= productoCorrespondiente.stock) {
      return true; // hay stock suficiente
    } else {
      return false; // no hay stock suficiente
    }
  });
};

const productosSolicitados = [
  { id: 1, cantidad: 5 },
  { id: 7, cantidad: 10 },
  { id: 6, cantidad: 1 },
];

const productosSolicitados2 = [
  { id: 1, cantidad: 5 },
  { id: 7, cantidad: 1 },
  { id: 6, cantidad: 7 },
  { id: 11, cantidad: 2 },
];

console.log("Productos disponibles:", productosDisponibles(productosSolicitados, productosTiendaCompleto));
console.log("Productos disponibles:", productosDisponibles(productosSolicitados2, productosTiendaCompleto));
