let plantas = {
alface: 0,
tomate: 0,
cenoura: 0
};

function plantar(tipo) {
plantas[tipo]++;
document.getElementById("contador").innerText =
`Alface: ${plantas.alface} | Tomate: ${plantas.tomate} | Cenoura: ${plantas.cenoura}`;
}

function toggle() {
document.body.classList.toggle("dark");
}
