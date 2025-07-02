/* 
Contar Propiedades por Tipo:

Problema: Dada una lista de usuarios (objetos con varias propiedades como nombre: string, edad: number, 
activo: boolean), crea una función que devuelva un objeto que cuente cuántas propiedades de cada 
tipo (string, number, boolean, etc.) hay en todos los objetos de la lista.

Input: [{ nombre: "Ana", edad: 30, activo: true }, { nombre: "Luis", edad: 25, activo: false }]

Output: { string: 2, number: 2, boolean: 2 } (para el ejemplo dado)
*/
const usuariosEjemplo = [
  { nombre: "Ana García", edad: 28, activo: true },
  { nombre: "Luis Pérez", edad: 35, activo: false },
  { nombre: "Marta López", edad: 22, activo: true },
  { nombre: "Carlos Ruiz", edad: 41, activo: true },
  { nombre: "Sofía Díaz", edad: 19, activo: false },
  { nombre: "Sofía Noches", edad: 39, activo: false, lista: ["arroz", "papaya", "carne"] },
  { nombre: "Sofía Tardes", edad: 29, activo: false, lista: [{ prop1: "arroz", prop2: "papaya", prop3: "carne" }] },
  { nombre: "Carls Ruize", edad: 47, activo: true, perfil: { nickName: "ru123", password: "doritos234" } },
  { nombre: "Maria López", edad: 32, activo: null },
  { nombre: "Maria López", edad: 32, activo: undefined },
];

function conteoPropiedades(listaUsuarios) {
  // El acumulador será el objeto final con el conteo de tipos de propiedades.
  return listaUsuarios.reduce((acc, usuarioActual) => {
    // Obtener un array con los nombres de todas las propiedades del usuario actual
    const propiedades = Object.keys(usuarioActual);

    // Iterar sobre cada nombre de propiedad
    propiedades.forEach((nombrePropiedad) => {
      // Obtener el valor de la propiedad
      const valorPropiedad = usuarioActual[nombrePropiedad];

      // Obtener el tipo de dato de ese valor
      const tipoDato = typeof valorPropiedad;

      // Incrementar el contador para ese tipo de dato en el acumulador
      if (acc[tipoDato]) {
        acc[tipoDato]++;
      } else {
        acc[tipoDato] = 1;
      }
    });

    // Retornar el acumulador actualizado para la siguiente iteración
    return acc;
  }, {});
}

console.log(conteoPropiedades(usuariosEjemplo));
