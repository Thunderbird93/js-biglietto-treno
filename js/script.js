const agePassenger = prompt ('Quanti anni hai?');
const distanceKm = prompt ('Quanti km vuole percorrere?');

let scontoGiovani = 0.2; // 17 anni o meno
let scontoAnziani = 0.4; // 66 anni o più
let kmPrice = 0.21;
let price = kmPrice * distanceKm;


output = `
${price}
`

console.log(price)

document.getElementById(`price`).innerHTML += price;