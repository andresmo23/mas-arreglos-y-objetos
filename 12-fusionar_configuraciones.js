/* 
Fusionar Configuraciones:

Problema: Tienes el objeto configuracionApp y un objeto nuevosAjustes (ej. 
{ 
    tema: 'claro', notificaciones: { sms: true } 
}). 
 Crea una función que devuelva un nuevo objeto de configuración que fusione configuracionApp con 
 nuevosAjustes, manejando propiedades anidadas de forma inmutable. Las propiedades en nuevosAjustes 
 deben sobrescribir las de configuracionApp.

Input: configuracionApp, nuevosAjustes

Output: Un nuevo objeto de configuración fusionado.
*/
import { configuracionApp, nuevosAjustes } from "./00-datos.js";

function fusionNewObject(original, newObj) {
  return {
    ...original, // copiamos todo lo del original
    // se fusiona manualmente las propiedades que tienen anidación
    notificaciones: {
      ...original.notificaciones, // mantener email,sms,push
      ...newObj.notificaciones, // sobreescribe sms si existe
    },
    // esta linea no funcionó, por lo menos lo que hace es no mostrar las
    // demas propiedades dentro de notificaciones
    //...newObj, // para otras propiedades no anidadas se sobreescribe directamente

    // 🔹 Copiamos las demás claves de `newObj`, excepto las ya tratadas
    ...Object.fromEntries(Object.entries(newObj).filter(([key]) => key !== "notificaciones")),
  };
}

console.log(fusionNewObject(configuracionApp, nuevosAjustes));
