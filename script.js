function getRandomMilliseconds() {
    return Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
}

function load() {
    var loadingDiv = document.querySelector('.loading');
    var footer = document.querySelector('footer');
    if (loadingDiv) {
        loadingDiv.style.display = 'none';
        footer.style.display = 'block';
    }
    // Appel de la fonction inscript après un délai aléatoire
};

window.onload(setTimeout(load, getRandomMilliseconds()));