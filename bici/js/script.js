const bici = [
    {
        Nome: "Cross",
        Peso: "22kg",
    },
    {
        Nome: "Street",
        Peso: "16kg",
    },
    {
        Nome: "MountainBike",
        Peso: "25kg",
    },
    {
        Nome: "Grazziella",
        Peso: "18kg",
    },
];

// PRENDO LE BICI CON UN PESO SOTTO I 20KG
let bicicletteLeggere = bici
    .sort((a,b) => parseFloat(a.Peso) - (b.Peso))
    .filter(({Peso}) => parseFloat(Peso) < 20);

// STAMPO LE BICI LEGGERE IN HTML
const listaBici = document.getElementById("lista-bici");
bicicletteLeggere.forEach(({Nome, Peso}) => {
    const li = document.createElement("li");
    li.innerText = `${Nome} ${Peso}`;
    listaBici.appendChild(li);
});

console.log(`Le bici con il peso minore di 20kg sono: `);
bicicletteLeggere.forEach(({Nome, Peso}) => console.log(`${Nome} ${Peso}`));
