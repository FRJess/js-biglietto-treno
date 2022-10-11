//Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65
//L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

const prezzoKm = 0.21;
const scontoMinorenne = 0.22;
const scontoOver65 = 0.40;
const kmPercorso = parseInt(prompt ("Quanti km devi percorrere?"));
const etaPassegero = parseInt(prompt ("Quanti anni hai?"));
const minorenne = 18;
const old = 65;
let scontoApplicato;


let prezzoViaggio = prezzoKm * kmPercorso;

if(etaPassegero >= minorenne && etaPassegero < old){
  scontoApplicato = 0
}else if(etaPassegero < minorenne){
  scontoApplicato = scontoMinorenne
}else{
  scontoApplicato = scontoOver65
}

let prezzoFinale = prezzoViaggio - (prezzoViaggio * scontoApplicato);

let formatCurrency = new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "EUR"
}).format(prezzoFinale);

document.getElementById("risultato").innerHTML=`
Per fare ${kmPercorso}km, <br>
il prezzo del tuo biglietto sarà di ${formatCurrency}.
`