function ordenarArray(numeros) {
    for (let i = 0; i < numeros.length; i++) {
      for (let j = 0; j < numeros.length - 1 - i; j++) {
        if (numeros[j] > numeros[j + 1]) {
          // Intercambiar valores
          let temp = numeros[j];
          numeros[j] = numeros[j + 1];
          numeros[j + 1] = temp;
        }
      }
    }
    return numeros;
  }
  
  const miArray = [5, 3, 8, 1, 2];
  console.log(ordenarArray(miArray)); // [1, 2, 3, 5, 8]