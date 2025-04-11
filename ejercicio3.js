function contarPares(numeros) {
    let contador = 0;
  
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 === 0) {
        contador++;
      }
    }
  
    return contador;
  }
  
  const miArray = [1, 2, 3, 4, 5, 6];
  console.log(contarPares(miArray));