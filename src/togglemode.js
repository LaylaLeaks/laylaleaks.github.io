const brightnessIcon = document.getElementById('brightnessIcon');

function toggleMode() {
    const body = document.body;

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        setBrightnessIcon('./img/moon.svg');
        localStorage.setItem('mode', 'light');
    } else {
        body.classList.add('dark-mode');
        setBrightnessIcon('./img/sun.svg');
        localStorage.setItem('mode', 'dark');
    }
}

function setBrightnessIcon(iconFileName) {
    brightnessIcon.style.backgroundImage = `url(${iconFileName})`;
}

document.getElementById('toggleMode').addEventListener('click', toggleMode);

const savedMode = localStorage.getItem('mode');
if (savedMode === 'dark') {
    document.body.classList.add('dark-mode');
    setBrightnessIcon('./img/sun.svg');
} else {
    document.body.classList.remove('dark-mode');
    setBrightnessIcon('./img/moon.svg');
}