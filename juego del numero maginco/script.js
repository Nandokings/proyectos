let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 0;

function intentar() {
    const entrada = document.getElementById('numeroEntrada');
    const mensaje = document.getElementById('mensaje');
    const valor = entrada.value;

    if (valor === '') {
        alert('Por favor ingresa un número');
        return;
    }

    const numeroUsuario = parseInt(valor);
    intentos++;

    if (numeroUsuario < numeroSecreto) {
        mensaje.textContent = 'El número secreto es mayor.';
    } else if (numeroUsuario > numeroSecreto) {
        mensaje.textContent = 'El número secreto es menor.';
    } else {
        mensaje.textContent = `¡Felicidades! Adivinaste el número secreto en ${intentos} intento${intentos > 1 ? 's' : ''}.`;
    }

    entrada.value = '';
}

function nuevoJuego() {
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    intentos = 0;
    document.getElementById('mensaje').textContent = '';
    document.getElementById('numeroEntrada').value = '';
}