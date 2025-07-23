/* 
Agrupar Tareas por Estado de Completado:

Problema: Dada la listaTareas, crea un objeto que agrupe las tareas en dos arrays: 
completadas y pendientes.

Input: listaTareas

Output:

{
  completadas: [
    { id: 'a2', descripcion: 'Enviar informe', completada: true, prioridad: 'media' },
    { id: 'a5', descripcion: 'Hacer ejercicio', completada: true, prioridad: 'media' },
  ],
  pendientes: [
    { id: 'a1', descripcion: 'Comprar víveres', completada: false, prioridad: 'alta' },
    { id: 'a3', descripcion: 'Llamar a cliente', completada: false, prioridad: 'alta' },
    { id: 'a4', descripcion: 'Pagar facturas', completada: false, prioridad: 'baja' },
  ]
}
*/
import { listaTareas } from "./00-datos.js";

function taskGroup(tasksList) {
  return tasksList.reduce(
    (acc, task) => {
      task.completada
        ? (acc.completadas = [...acc.completadas, task])
        : (acc.pendientes = [...acc.pendientes, task]);

      return acc;
    },
    { completadas: [], pendientes: [] }
  );
}

console.log(taskGroup(listaTareas));
