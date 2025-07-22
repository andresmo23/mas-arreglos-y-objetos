/* 
Verificar Existencia de Tareas Urgentes:

Problema: Dada la listaTareas, verifica si existe al menos una tarea que tenga prioridad: 
'alta' y que no esté completada.

Input: listaTareas

Output: true o false.
*/
import { listaTareas } from "./00-datos.js";

function urgentTasks(taskList) {
  const urgent = taskList.some((task) => task.completada === false && task.prioridad === "alta");
  return `Hay tareas con prioridad: ${urgent}`;
}

console.log(urgentTasks(listaTareas));
