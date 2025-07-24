/* 
Contar Valores Únicos de Propiedad:

Problema: Dada una lista de productos (como productosTiendaCompleto), cuenta cuántos valores 
únicos hay para la propiedad categoria.

Input: productosTiendaCompleto

Output: Un número (ej. 6 si hay 6 categorías únicas).
*/
import { productosTiendaCompleto } from "./00-datos.js";

function countValuesU(products) {
  const categories = products.map((product) => product.categoria);
  const categoriesSet = new Set(categories);
  return `Numero total de categorias: ${Array.from(categoriesSet).length}`;
}

console.log(countValuesU(productosTiendaCompleto));
