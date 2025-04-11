function generarFibonacci() {
    let fibonacci = [0, 1]; // Primeros dos números de la serie
  
    for (let i = 2; i < 10; i++) {
      // Sumar los dos números anteriores para obtener el siguiente
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
  
    console.log(fibonacci); // Imprimir los primeros 10 números de Fibonacci
  }
  
  generarFibonacci();