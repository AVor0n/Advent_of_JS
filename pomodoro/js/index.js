import { Timer } from "./timer.js";
const $startBtn = document.querySelector('.start');
const $settingsBtn = document.querySelector('.settings');
const $minutesInput = document.querySelector('.minutes input');
const $secondsInput = document.querySelector('.seconds input');
const $ring = document.querySelector('.ring');

const initialTime = {
    minutes: 15,
    seconds: 0,
};

const updateTimerUI = (minutes, seconds) => {
    $minutesInput.value = `${minutes}`.padStart(2,'0');
    $secondsInput.value = `${seconds}`.padStart(2,'0');
};

updateTimerUI(...Object.values(initialTime));
const timer = new Timer(...Object.values(initialTime));

timer.addEventListener('tick', () => {
    updateTimerUI(timer.minutes, timer.seconds);
});

timer.addEventListener('start', () => {
    $ring?.classList.remove('ending');
    $minutesInput.disabled = true;
    $secondsInput.disabled = true;
    $startBtn.textContent = 'stop';
});

timer.addEventListener('pause', () => {
    $startBtn.textContent = 'start';
});

timer.addEventListener('stop', () => {
    $ring?.classList.add('ending');
    $startBtn.textContent = 'restart';
});

$startBtn?.addEventListener('click', () => {
    if(timer.status === 'run'){
        timer.stop();
        return;
    }

    if(timer.time <= 0){
        timer.minutes = initialTime.minutes;
        timer.seconds = initialTime.seconds;
        updateTimerUI(...Object.values(initialTime));
    }
    timer.start();
});

$settingsBtn.addEventListener('click', () => {
    if(timer.status === 'run') return;
    $minutesInput.disabled = false;
    $secondsInput.disabled = false;
});

$minutesInput.addEventListener('change', () => {
    timer.minutes = +$minutesInput.value;
    $minutesInput.value = $minutesInput.value.padStart(2,'0');
});

$secondsInput.addEventListener('change', () => {
    timer.seconds = +$secondsInput.value;
    $secondsInput.value = $secondsInput.value.padStart(2,'0');
});

$minutesInput.addEventListener('keydown', e => {
    if(/\D/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {
        e.preventDefault();
    }
});

$secondsInput.addEventListener('keydown', e => {
    if(/\D/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {
        e.preventDefault();
    }
});
