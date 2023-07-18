
const username = prompt('Inserisci il tuo nome');

const surname = prompt('Inserisci il tuo cognome');

const favColor = prompt('Inserisci il tuo colore preferito');

const myInfo = (username+surname+favColor+'29');

document.getElementById('main-title').innerHTML = myInfo;
