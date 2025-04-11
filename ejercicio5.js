function buscarNombre(nombres, nombreBuscado) {
    const posicion = nombres.indexOf(nombreBuscado);
    
    if (posicion === -1) {
      return `${nombreBuscado} no se encuentra en la lista.`;
    } else {
      return `El nombre ${nombreBuscado} está en la posición ${posicion}.`;
    }
  }
  
  const listaDeNombres = ["Juan", "Ana", "Pedro", "Maria"];
  console.log(buscarNombre(listaDeNombres, "Pedro")); // "El nombre Pedro está en la posición 2"
  console.log(buscarNombre(listaDeNombres, "Carlos")); // "Carlos no se encuentra en la lista."