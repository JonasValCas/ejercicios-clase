function generarFibonacciHasta100() {
    let a = 0;
    let b = 1;
  
    console.log(a); 
  
    while (b <= 100) {
      console.log(b); 
      let temp = b;
      b = a + b; // Calcular el siguiente número de la serie
      a = temp; // Actualizar el valor de 'a' para el próximo ciclo
    }
  }
  
  generarFibonacciHasta100();