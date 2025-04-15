function sumarPositivos(array) {
    const positivos = array.filter(num => num > 0);
    const suma = positivos.reduce((acumulador, num) => acumulador + num, 0);
    return suma;
  }
  
  const miArray = [-1, 2, -3, 4, 5, -6];
  console.log("Suma de los positivos:", sumarPositivos(miArray)); 