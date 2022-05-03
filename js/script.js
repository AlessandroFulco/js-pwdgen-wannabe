// chiedi all'utente il suo nome, il suo cognome e il suo colore preferito

// dichiarazioni variabili
// name
const name = prompt('Inserisci Nome:');
// debug
console.log(name);

// suname
const surname = prompt('Inserisci Cognome:');
// debug
console.log(surname);

// favourite color
const favColor = prompt('Inserisci il tuo colore preferito:');
// debug
console.log(favColor);

const password = name + surname + favColor + "21";
// debug
console.log(password);

document.getElementById('password_generator').innerHTML = password;