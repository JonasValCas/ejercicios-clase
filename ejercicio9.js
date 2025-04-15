function encontrarMultiploDeCinco(array) {
    return array.find(num => num % 5 === 0);
  }
  
  const miArray = [12, 22, 33, 45, 50];
  console.log("Primer múltiplo de 5 encontrado:", encontrarMultiploDeCinco(miArray));