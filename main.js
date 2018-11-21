// - Il software riceve in input un lungo testo e una serie di parole da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un "badword index" calcolato come il numero di parole censurate su il numero di parole totali
var testo = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
var listaNera = ['ipsum', 'sed', 'labore'];
var paroleCensurate = 'xxx';
for(var i = 0; i < listaNera.length; i++) {
  if (testo.includes(listaNera[i])) {
    testo = testo.replace(listaNera[i], paroleCensurate);
  }
}
console.log(testo);
