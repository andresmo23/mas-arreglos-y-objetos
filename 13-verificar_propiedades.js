/* 
Verificar Propiedades Obligatorias:

Problema: Dada una dataUsuario (un objeto, ej. { nombre: "Pedro", edad: 25 }) y un array de 
propiedadesRequeridas (ej. ['nombre', 'email', 'edad']), crea una función que verifique si 
dataUsuario contiene todas las propiedadesRequeridas.

Input: dataUsuario, propiedadesRequeridas

Output: true o false.
*/

//Caso 1: Todas las propiedades requeridas están presentes
const dataUsuario = {
  nombre: "Ana García",
  edad: 30,
  email: "ana.garcia@example.com",
  ciudad: "Madrid",
};

const propiedadesRequeridas = ["nombre", "email", "edad"];

// Caso 3: dataUsuario vacío
const dataUsuario3 = {};

const propiedadesRequeridas3 = ["nombre", "edad"];

// Caso 4: propiedadesRequeridas vacío
const dataUsuario4 = {
  nombre: "Laura Pérez",
  edad: 28,
};

const propiedadesRequeridas4 = [];

// Caso 2: Faltan algunas propiedades requeridas
const dataUsuario2 = {
  nombre: "Carlos Ruiz",
  edad: 22,
  telefono: "123-456-7890",
};

const propiedadesRequeridas2 = ["nombre", "email", "edad", "direccion"];

function requiredProperty(dataUser, propertyRequired) {
  // Forma directa de realizar la validación
  return propertyRequired.every((property) => dataUser.hasOwnProperty(property));

  // También es una forma valida si necesitaramos las claves en un array
  // return propertyRequired.every((property) => Object.keys(dataUser).includes(property));
}

console.log(requiredProperty(dataUsuario, propiedadesRequeridas)); // true
console.log(requiredProperty(dataUsuario2, propiedadesRequeridas2)); // false
console.log(requiredProperty(dataUsuario3, propiedadesRequeridas3)); // false
console.log(requiredProperty(dataUsuario4, propiedadesRequeridas4)); // true
