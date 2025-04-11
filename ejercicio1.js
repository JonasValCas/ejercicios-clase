function sumarArray(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
    return suma;
  }
  
  const miArray = [1, 2, 3, 4, 5];
  console.log(sumarArray(miArray)); 
