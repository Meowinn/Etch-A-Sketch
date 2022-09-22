const tileContainer = document.querySelector(`.tileContainer`)
let sliderValue = document.querySelector(`.totalSize`);
let slider = document.querySelector(`.slider`);
const btn = document.querySelector(`.btn`);
let tileSize = 16;

createContainer(tileSize);

function createTiles(size) {
    const rows = document.createElement(`div`);
    rows.classList.add(`box`);
    rows.style.width = `${size}px`;
    rows.style.height = `${size}px`;
    return rows;
}

function createContainer(slider) {
    for (let a=0; a<slider; a++) {
        for(let i=0; i<slider; i++) {
            tileContainer.appendChild(createTiles(tileContainer.clientWidth / slider));
        }
    }
}

function clearRe() {
    while (tileContainer.firstChild) {
        tileContainer.removeChild(tileContainer.lastChild);
    }
    createContainer(tileSize);
    applyEffect();
}

function applyEffect() {
const rowSelect = document.querySelectorAll(`div.box`);
for(const allRows of rowSelect) {
    allRows.addEventListener(`mouseover`, function() {
        allRows.setAttribute(`id`, `hoverEffect`);
    })
}
};
applyEffect();

slider.addEventListener(`input`, function(e) {
    tileSize = e.target.value;
    sliderValue.textContent = `${tileSize}x${tileSize}`;
    clearRe();
});

btn.addEventListener(`click`, clearRe);









