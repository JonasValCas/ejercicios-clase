function obtenerMayorYMenor(numeros) {
    let mayor = numeros[0];
    let menor = numeros[0];
  
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] > mayor) {
        mayor = numeros[i];
      }
      if (numeros[i] < menor) {
        menor = numeros[i];
      }
    }
  
    return { mayor, menor };
  }
  
  const miArray = [10, 4, 7, 22, -5];
  console.log(obtenerMayorYMenor(miArray));