const squadre = [
    {
        Nome: "Milan",
        PuntiFatti: "0",
        FalliSubiti: "0"
    },
    {
        Nome: "Inter",
        PuntiFatti: "0",
        FalliSubiti: "0"
    },
    {
        Nome: "Roma",
        PuntiFatti: "0",
        FalliSubiti: "0"
    },
    {
        Nome: "Lazio",
        PuntiFatti: "0",
        FalliSubiti: "0"
    },
    {
        Nome: "Napoli",
        PuntiFatti: "0",
        FalliSubiti: "0"
    },
    {
        Nome: "Juventus",
        PuntiFatti: "0",
        FalliSubiti: "0"
    },
    {
        Nome: "Sampdoria",
        PuntiFatti: "0",
        FalliSubiti: "0"
    },
];

// RANDOMIZZO I FALLI E I PUNTI
for (let i = 0; i < squadre.length; i++) {
    squadre[i].PuntiFatti = Math.floor(Math.random() * 51);
    squadre[i].FalliSubiti = Math.floor(Math.random() * 31);
}

// ORDINO DAL MAGGIORE AL MINORE
function confrontaPunti(a, b) {
    return b.PuntiFatti - a.PuntiFatti;
}
squadre.sort(confrontaPunti);

// STAMPO LE SQUADRE E I PUNTI IN HTML
const listaCLassifica = document.getElementById("classifica");
squadre.forEach (({Nome, PuntiFatti}) => {
    const li = document.createElement ("li");
    li.innerHTML = `${Nome}: punti ${PuntiFatti}`;
    listaCLassifica.appendChild(li);
})

// squadre.forEach(({Nome, FalliSubiti}) => console.log(`${Nome} Falli subiti ${FalliSubiti}`));
squadre.forEach(({Nome, PuntiFatti}) => console.log(`${Nome} Punti fatti ${PuntiFatti}`));