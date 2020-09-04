// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.



// funzione che genera un numero casuale tra 1 e 1000
function numeroRandom() { //lasciamo le parentesi vuote perche la funzione non accetta paramentri in entrata
  var numeroACaso = Math.floor(Math.random() * 1000) + 1;
  return numeroACaso;
}

var numeroAcaso = numeroRandom();

var arrayNumUtente = []

// sono in questo caso i 30' che l'utente deve aspettare per inserire i numeri che ha memorizzato
setTimeout(myFunction,30000);

// l'utente deve inserire i numeri che ha appena visto
function myFunction() {
  var numeroUtente = parseInt(prompt("Inserisci i numeri che hai appena visto"));
}
