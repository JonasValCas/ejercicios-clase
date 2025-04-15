function convertirAMayusculas(nombres) {
  return nombres.map(nombre => nombre.toUpperCase());
}

const nombresOriginales = ["ana", "luis", "carlos", "maría"];
const nombresMayus = convertirAMayusculas(nombresOriginales);

console.log("Original:", nombresOriginales);
console.log("En mayúsculas:", nombresMayus);