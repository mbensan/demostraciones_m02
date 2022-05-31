// Ahora vamos a ver cómo pedirle un número al usuarios

// 1. Primero defino el premio
const premio = 100000

// 2. Pregunto por el saldo actual al usuario
let saldo = prompt('Hola. Ingrese su saldo actual')

// 3. Transformo ese valor a número
saldo = parseInt(saldo)

// 4. Calculo el nuevo saldo
const nuevo_saldo = saldo + premio

// 5. Le aviso al usuario su nuevo saldo
console.log('Felicidades!!!\n Su nuevo saldo es ' + nuevo_saldo);
