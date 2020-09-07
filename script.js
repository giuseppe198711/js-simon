// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

// generare 5 numeri casuali da 1 a 100

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //il max è incluso e il min è incluso

}

var numeriGenerati = [];

while (numeriGenerati.length < 5) {
  var numRandom = getRandomIntInclusive(1, 100);
  if(numeriGenerati.includes(numRandom) == false) {
    numeriGenerati.push(numRandom);
  }
}

// mostro all'utente i 5 numeri numeriGenerati

alert("Cerca di ricordare i seguenti numeri: " + numeriGenerati);


// dopo 5 secondi facciamo inserire i numeri all'utente

setTimeout(function() {
  var numeriUtente = [];
  while (numeriUtente.length < 5) {
    var numeroUtente = parseInt(prompt("Inserisci un numero"));
    if (!numeriUtente.includes(numeroUtente)) {
      numeriUtente.push(numeroUtente);
    } else {
      alert("Hai già inserito questo numero!");
    }
  }

  // verificare quali numeri ha indovinato l'utente rispetto
  // a quelli generati precedentemente
  var numeriIndovinati = [];
  for (var i = 0; i < numeriGenerati.length; i++) {
    // numeriGenerati[i]
    if (numeriUtente.includes(numeriGenerati[i])) {
      numeriIndovinati.push(numeriGenerati[i]);
    }
  }

  //stampa il risultato
  if (numeriIndovinati.length > 0) {
    alert("Hai indovinato " + numeriIndovinati.length + " numeri: " + numeriIndovinati);
  } else {
    alert("Riprova!");
  }
}, 5000);
