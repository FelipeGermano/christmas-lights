const container = document.getElementById('container');
const startStopButton = document.getElementById('start-stop');
const intervalInput = document.getElementById('interval');
const intensityInput = document.getElementById('intensity');
const linesInput = document.getElementById('lines');
const colorInputs = document.querySelectorAll('.circle-color');

let isRunning = false;
let intervalId;
let currentIndex = 0;

function createCircles(numLines) {
    container.innerHTML = '';
    container.style.gridTemplateRows = `repeat(${numLines}, auto)`;
    for (let i = 0; i < numLines; i++) {
        const line = document.createElement('div');
        line.style.display = 'flex';
        line.style.gap = '20px';

        colorInputs.forEach((colorInput, index) => {
            const circle = document.createElement('div');
            circle.classList.add('circle');
            circle.style.backgroundColor = colorInput.value;
            circle.style.opacity = '0.5';
            line.appendChild(circle);
        });

        container.appendChild(line);
    }
}

function illuminateCircle() {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        circle.style.opacity = '0.5';
    });

    const numLines = parseInt(linesInput.value);
    const lineIndex = currentIndex % numLines;
    const colorIndex = currentIndex % colorInputs.length;

    const circle = container.children[lineIndex].children[colorIndex];
    if (circle) {
        circle.style.opacity = intensityInput.value;
    }

    currentIndex++;
}

function startAnimation() {
    const interval = parseInt(intervalInput.value);
    if (isNaN(interval) || interval <= 0) return;

    intervalId = setInterval(illuminateCircle, interval);
    isRunning = true;
    startStopButton.textContent = 'Stop';
}

function stopAnimation() {
    clearInterval(intervalId);
    isRunning = false;
    startStopButton.textContent = 'Start';
}

startStopButton.addEventListener('click', () => {
    if (isRunning) {
        stopAnimation();
    } else {
        startAnimation();
    }
});

intervalInput.addEventListener('change', () => {
    if (isRunning) {
        stopAnimation();
        startAnimation();
    }
});

intensityInput.addEventListener('change', () => {
    illuminateCircle();
});

linesInput.addEventListener('change', () => {
    createCircles(parseInt(linesInput.value));
    if (isRunning) {
        stopAnimation();
        startAnimation();
    }
});

colorInputs.forEach(input => {
    input.addEventListener('input', () => {
        createCircles(parseInt(linesInput.value));
        illuminateCircle();
    });
});

// Inicialize o estado padrão
createCircles(parseInt(linesInput.value));
