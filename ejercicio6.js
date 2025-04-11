function invertirArray(array) {
    let inicio = 0;
    let fin = array.length - 1;
  
    while (inicio < fin) {
      // Intercambiar los elementos
      let temp = array[inicio];
      array[inicio] = array[fin];
      array[fin] = temp;
  
      // Mover los índices hacia el centro
      inicio++;
      fin--;
    }
  
    return array;
  }
  
  const miArray = [1, 2, 3, 4, 5];
  console.log(invertirArray(miArray));