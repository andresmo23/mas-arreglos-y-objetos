/* 
Actualizar Información de Usuario:

Problema: Tienes un objeto usuario (ej. 
{ id: 1, nombre: "Juan", email: "juan@example.com", direccion: { calle: "Calle Falsa 123", ciudad: "Bogotá" }}). 
Crea una función que reciba este objeto y un objeto cambios (ej. 
{ email: "nuevo@example.com", direccion: { ciudad: "Medellín" } }). 
La función debe devolver un nuevo objeto usuario con los cambios aplicados, 
pero sin modificar el objeto original. Debe manejar propiedades anidadas.

Input: usuario, cambios

Output: nuevoObjetoUsuario
*/
const usuario1 = {
  id: 1,
  nombre: "Juan",
  email: "juan@example.com",
  direccion: {
    calle: "Calle Falsa 123",
    ciudad: "Bogotá",
  },
};

const email = {
  email: "nuevo@example.com",
  direccion: {
    ciudad: "Medellín",
    codigoPostal: "3432",
  },
};

function actualizarInfromacion(usuario, cambios) {
  // crea un nuevo objeto para la inmutabilidad
  const nuevoUsuario = {
    ...usuario, // copia las propiedades del nivel superior del usuario
    email: cambios.email, // sobreescribe la propiedad email
    direccion: {
      ...usuario.direccion, // copio las propiedades del objeto anidado dentro de usuario
      ...cambios.direccion, // copia/sobreescribe las propiedades que esten en cambios sobre la copia anterior
    },
  };

  // retorno el nuevo objeto con los cambios
  return nuevoUsuario;
}

console.log(actualizarInfromacion(usuario1, email));
