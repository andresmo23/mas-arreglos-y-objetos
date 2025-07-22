/* 
Calcular Saldo Bancario Final:

Problema: Dada la lista transaccionesBancarias, calcula el saldo final de la cuenta. 
Los depósitos suman y los retiros/compras restan.

Input: transaccionesBancarias

Output: Un número (el saldo total).

Ejemplo: 
Para las transaccionesBancarias dadas, el saldo final sería 1000 - 200 - 150 + 500 - 300 - 50 = 800.
*/
import { transaccionesBancarias } from "./00-datos.js";

function saldoCuentaBancaria(transacciones) {
  const saldoFinal = transacciones.reduce((acc, transaccion) => {
    if (typeof transaccion.monto !== "number" || typeof transaccion.tipo !== "string") return acc;

    if (transaccion.tipo === "deposito") return acc + transaccion.monto;
    if (transaccion.tipo === "retiro" || transaccion.tipo === "compra")
      return acc - transaccion.monto;

    return acc;
  }, 0);

  return `Saldo total: ${saldoFinal}`;
}

console.log(saldoCuentaBancaria(transaccionesBancarias));
