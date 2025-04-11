function sumarImpares() {
    let suma = 0;
    let i = 1; 
  
    for (i; i <= 50; i++) {
      if (i % 2 !== 0) {  // Si el número es impar
        suma += i;  // Sumamos el número
      }
  
      if (suma > 500) {
        break;  // Salir del bucle 'for' si la suma supera 500
      }
    }
  
    
    console.log("La suma de los impares es: " + suma);
  
    let j = suma; // Usamos un valor temporal para hacer el ciclo while
  
    while (j > 500) {
      console.log("La suma ha superado 500.");
      break; 
    }
  }
  
  sumarImpares();