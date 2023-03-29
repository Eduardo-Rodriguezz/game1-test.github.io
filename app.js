
const piedra = document.getElementById('piedra');
const papel = document.getElementById('papel');
const tijeras = document.getElementById('tijeras');
const playerSelection = document.getElementById('player-select');
const cpuSelection = document.getElementById('cpu-select');
const resultado = document.getElementById('result');
const cpuJugada = document.getElementById('cpu-img');
const btnReset = document.getElementById('reset');
let piedraSelect = new Boolean(false);
let papelSelect = new Boolean(false);
let tijeraSelect = new Boolean(false);
let puntaje = document.getElementById('puntaje');
let playerAcc = 0, cpuAcc = 0;


const titulo = document.querySelector('h3').textContent = '<< Piedra, Papel o Tijeras >>';

piedra.addEventListener('click', () => {
    playerSelection.textContent = 'Tú lanzaste: Piedra';
    piedraSelect = true;
    papelSelect = false;
    tijeraSelect = false;
    juego();

});

papel.addEventListener('click', () => {
    playerSelection.textContent = 'Tú lanzaste: Papel';
    papelSelect = true;
    piedraSelect = false;
    tijeraSelect = false;
    juego();

});

tijeras.addEventListener('click', () => {
    playerSelection.textContent = 'Tú lanzaste: Tijeras';
    tijeraSelect = true;
    piedraSelect = false;
    papelSelect = false;
    juego();

});

const juego = () => {
    
    let cpu = Math.round(Math.random() * 2);

    if((piedraSelect === true && cpu === 2) || (papelSelect === true && cpu === 0) || (tijeraSelect === true && cpu === 1)) {
        resultado.textContent = 'Ganaste!';
        resultado.style.color='green';
        playerAcc += 1;
    } else if((piedraSelect === true && cpu === 0) || (papelSelect === true && cpu === 1) || (tijeraSelect === true && cpu === 2)) {
        resultado.textContent = 'Es un Empate';
        resultado.style.color='#acd3f8';
    } else {
        resultado.textContent = 'Perdiste!';
        resultado.style.color='red';
        cpuAcc += 1;
    }

    if(cpu === 0)
        cpuSelection.textContent = 'CPU lanzó: Piedra'; 
    if(cpu === 1)
        cpuSelection.textContent = 'CPU lanzó: Papel';
    if(cpu === 2)
        cpuSelection.textContent = 'CPU lanzó: Tiejeras';

    puntaje.textContent = ` Tú: ${playerAcc} - CPU: ${cpuAcc}`;

}

btnReset.textContent = 'Resetear';
btnReset.addEventListener('click', () => {
    playerAcc = 0, cpuAcc = 0;
    papelSelect = false;
    piedraSelect = false;
    tijeraSelect = false;
    playerSelection.textContent = 'Aún no has lanzado...';
    cpuSelection.textContent = 'CPU pensando...';
    resultado.textContent = '';
    puntaje.textContent = '> Tabla de puntajes <';
})



