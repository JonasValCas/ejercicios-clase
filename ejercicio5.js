function buscarNombre(lista, nombreBuscado) {
  for (let i = 0; i < lista.length; i++) {
      if (lista[i].toLowerCase() === nombreBuscado.toLowerCase()) {
          return i; // devuelve la posición
      }
  }
  return -1; // si no se encuentra
}

// Ejemplo de uso:
const nombres = ["Ana", "Luis", "Carlos", "María"];
const nombreABuscar = "Carlos";

const posicion = buscarNombre(nombres, nombreABuscar);

if (posicion !== -1) {
  console.log(`El nombre "${nombreABuscar}" está en la posición ${posicion}.`);
} else {
  console.log(`El nombre "${nombreABuscar}" no está en la lista.`);
}