'use strict';

let alarmTime = null; 

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('clock').innerText = `${hours}:${minutes}`;

    if (alarmTime && `${hours}:${minutes}` === alarmTime) {
        playAlarmSound(); 
        clearAlarm();
    }
}

function playAlarmSound() {
  const alarmSound = document.getElementById('alarm-sound');
  alarmSound.currentTime = 0;
  alarmSound.play();
}

function setAlarm() {
    const hoursInput = document.getElementById('alarm-hours').value;
    const minutesInput = document.getElementById('alarm-minutes').value; 

    if (hoursInput !== "" && minutesInput !== "") {
        const formattedHours = String(hoursInput).padStart(2, '0');
        const formattedMinutes = String(minutesInput).padStart(2, '0');
        alarmTime = `${formattedHours}:${formattedMinutes}`;
        document.getElementById('alarm-message').textContent = alarmTime;

        document.getElementById('alarm-hours').value = '';
        document.getElementById('alarm-minutes').value = '';
    } else {

        if (hoursInput === "") {
            document.getElementById('alarm-hours').focus();
        } else {
            document.getElementById('alarm-minutes').focus();
        }
    }
}

function clearAlarm() {
    alarmTime = null;
    document.getElementById('alarm-message').textContent = '';
}

setInterval(updateClock, 1000);

updateClock();

document.getElementById('set-alarm').addEventListener('click', setAlarm);
