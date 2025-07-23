/* 
Transformar y Sumar Montos por Tipo de Transacción:

Problema: Dada transaccionesBancarias, crea un objeto que sume los montos totales para cada tipo de 
transacción (deposito, retiro, compra).

Input: transaccionesBancarias

Output: { deposito: 1500, retiro: 500, compra: 200 }
*/
import { transaccionesBancarias } from "./00-datos.js";

function sumTypeTransaction(transactions) {
  return transactions.reduce(
    (acc, transaction) => {
      const typeTransaction = transaction.tipo;

      if (typeof typeTransaction !== "string") return acc;

      switch (typeTransaction) {
        case "deposito":
          acc.deposito += transaction.monto;
          break;
        case "retiro":
          acc.retiro += transaction.monto;
          break;
        case "compra":
          acc.compra += transaction.monto;
          break;
        default:
          console.warn(`Tipo de transacción desconocido: ${typeTransaction}`);
      }

      return acc;
    },
    { deposito: 0, retiro: 0, compra: 0 }
  );
}

console.log(sumTypeTransaction(transaccionesBancarias));
