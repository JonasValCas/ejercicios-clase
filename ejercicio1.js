function sumarArray(numeros) {
  let suma = 0;
  for (let num of numeros) {
      suma += num;
  }
  return suma;
}

// Ejemplo de uso:
const numeros = [1, 2, 3, 4, 5];
console.log("La suma es:", sumarArray(numeros));
