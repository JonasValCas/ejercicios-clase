const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log("\n----- Menú -----");
    console.log("1. Ver datos");
    console.log("2. Hacer una operación");
    console.log("3. Salir");
}

function pedirOpcion() {
    return new Promise((resolve) => {
        rl.question("Elige una opción: ", (input) => {
            resolve(input);
        });
    });
}

async function ejecutarMenu() {
    let opcion;
    
    do {
        mostrarMenu();  // Mostrar las opciones del menú
        
        opcion = await pedirOpcion();  // Esperamos que el usuario ingrese una opción

        switch(opcion) {
            case "1":
                console.log("✔️ Has elegido 'Ver datos'. Mostrando información...");
                break;
            case "2":
                console.log("✔️ Has elegido 'Hacer una operación'. Realizando operación...");
                break;
            case "3":
                console.log("✔️ Has elegido 'Salir'. Cerrando el programa...");
                rl.close();
                break;
            default:
                console.log("❌ Opción no válida. Por favor, elige una opción correcta.");
        }

    } while (opcion !== "3");  // Continuar hasta que el usuario elija salir (opción 3)
}

ejecutarMenu();