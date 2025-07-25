/* 
Convertir Clave-Valor de Objeto Simple:

Problema: Dado un objeto simple donde tanto las claves como los valores son strings o 
números (ej. { a: '1', b: '2' }), crea una función que devuelva un nuevo objeto donde 
las claves sean los valores originales y los valores sean las claves originales.

Input: { 'red': '#FF0000', 'blue': '#0000FF' }

Output: { '#FF0000': 'red', '#0000FF': 'blue' }
*/
const style = { red: "#FF0000", blue: "#0000FF" };

function invertObject(objGeneric) {
  return Object.fromEntries(Object.entries(objGeneric).map(([key, value]) => [value, key]));
}

console.log(invertObject(style));
