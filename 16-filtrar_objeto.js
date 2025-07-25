/* 
Filtrar Objeto por Prefijo de Clave:

Problema: Dado un objeto (ej. configuracionApp) y un prefijo (ej. 'noti'), crea una función que 
devuelva un nuevo objeto que contenga solo las propiedades cuyas claves empiecen con ese prefijo.

Input: configuracionApp, 'noti'

Output: { notificaciones: { email: true, sms: false, push: true } }
*/
import { configuracionApp } from "./00-datos.js";

function objectFilter(obj, prefix) {
  return Object.fromEntries(Object.entries(obj).filter(([key]) => key.startsWith(prefix)));
}

console.log(objectFilter(configuracionApp, "noti"));

// en la primera solución lo habia pensado con .includes pero acá van las diferencias:

// includes: El  método verifica si una cadena de texto contiene el substring especificado en cualquier parte de la cadena

// startsWith: El método verifica si una cadena de texto comienza con el substring especificado.
// solo devolverá true si el substring se encuentra al principio de la cadena
