function convertirAMayusculas(nombres) {
    return nombres.map(nombre => nombre.toUpperCase());
  }
  
  const listaDeNombres = ["Juan", "Ana", "Pedro", "Maria"];
  console.log(convertirAMayusculas(listaDeNombres)); 