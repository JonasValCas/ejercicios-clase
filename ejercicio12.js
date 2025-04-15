const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntarAsync(pregunta) {
    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
        });
    });
}

async function adivinaNumero() {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let adivinaste = false;

    console.log("🎲 Adivina el número del 1 al 10");

    while (!adivinaste) {
        const input = await preguntarAsync("Tu intento: ");
        const intento = parseInt(input);

        if (isNaN(intento)) {
            console.log("⛔ Eso no es un número válido.");
        } else if (intento === numeroSecreto) {
            console.log(`🎉 ¡Correcto! El número era ${numeroSecreto}.`);
            adivinaste = true;
        } else {
            console.log("❌ Incorrecto, intenta de nuevo...");
        }
    }

    rl.close();
}

adivinaNumero();